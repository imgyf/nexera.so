import type { VercelRequest, VercelResponse } from "@vercel/node";

const LARK_BASE = "https://open.larksuite.com";
const MAX_RESUME_BYTES = 5 * 1024 * 1024;

export const config = {
  api: {
    bodyParser: { sizeLimit: "8mb" },
  },
};

interface ResumePayload {
  name: string;
  type: string;
  size: number;
  content: string;
}

function transformFields(body: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = { ...body };
  const link = out["Portfolio Link"];
  if (typeof link === "string" && link.length > 0) {
    out["Portfolio Link"] = { link, text: link };
  }
  return out;
}

async function uploadResumeToLark(
  token: string,
  appToken: string,
  resume: ResumePayload
): Promise<string> {
  const bytes = Buffer.from(resume.content, "base64");
  if (bytes.byteLength > MAX_RESUME_BYTES) {
    throw new Error("Resume file too large");
  }

  const form = new FormData();
  form.append("file_name", resume.name);
  form.append("parent_type", "bitable_file");
  form.append("parent_node", appToken);
  form.append("size", String(bytes.byteLength));
  form.append(
    "file",
    new Blob([new Uint8Array(bytes)], { type: resume.type }),
    resume.name
  );

  const res = await fetch(`${LARK_BASE}/open-apis/drive/v1/medias/upload_all`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  });
  const data = (await res.json()) as {
    code: number;
    msg: string;
    data?: { file_token?: string };
  };
  if (data.code !== 0 || !data.data?.file_token) {
    throw new Error(`Resume upload failed: ${data.msg}`);
  }
  return data.data.file_token;
}

async function getTenantToken(appId: string, appSecret: string): Promise<string> {
  const res = await fetch(`${LARK_BASE}/open-apis/auth/v3/tenant_access_token/internal`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ app_id: appId, app_secret: appSecret }),
  });
  const data = (await res.json()) as { code: number; msg: string; tenant_access_token?: string };
  if (data.code !== 0 || !data.tenant_access_token) {
    throw new Error(`Token error: ${data.msg}`);
  }
  return data.tenant_access_token;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const appId = process.env.LARK_APP_ID;
  const appSecret = process.env.LARK_APP_SECRET;
  const appToken = process.env.LARK_BASE_APP_TOKEN;
  const tableId = process.env.LARK_BASE_TABLE_ID;

  if (!appId || !appSecret || !appToken || !tableId) {
    return res.status(500).json({ error: "Lark credentials not configured" });
  }

  try {
    const token = await getTenantToken(appId, appSecret);

    const body = req.body as
      | { fields?: Record<string, unknown>; resume?: ResumePayload }
      | Record<string, unknown>;
    const hasEnvelope =
      body && typeof body === "object" && "fields" in body && (body as { fields?: unknown }).fields;
    const rawFields = (hasEnvelope
      ? (body as { fields: Record<string, unknown> }).fields
      : (body as Record<string, unknown>)) ?? {};
    const resume = hasEnvelope ? (body as { resume?: ResumePayload }).resume : undefined;

    const fields = transformFields(rawFields);

    if (resume?.content) {
      const fileToken = await uploadResumeToLark(token, appToken, resume);
      fields["Resume"] = [{ file_token: fileToken }];
    }

    const url = `${LARK_BASE}/open-apis/bitable/v1/apps/${appToken}/tables/${tableId}/records`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ fields }),
    });

    const data = (await response.json()) as { code: number; msg: string };
    if (data.code !== 0) {
      return res.status(502).json({ error: data.msg || "Bitable error" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return res.status(500).json({ error: message });
  }
}
