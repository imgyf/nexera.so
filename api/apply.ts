import type { VercelRequest, VercelResponse } from "@vercel/node";

const LARK_BASE = "https://open.larksuite.com";

function transformFields(body: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = { ...body };
  const link = out["Portfolio Link"];
  if (typeof link === "string" && link.length > 0) {
    out["Portfolio Link"] = { link, text: link };
  }
  return out;
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

    const url = `${LARK_BASE}/open-apis/bitable/v1/apps/${appToken}/tables/${tableId}/records`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ fields: transformFields(req.body) }),
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
