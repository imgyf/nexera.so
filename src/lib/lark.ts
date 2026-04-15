export interface ResumePayload {
  name: string;
  type: string;
  size: number;
  content: string; // base64 (no data: prefix)
}

async function fileToBase64(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

export async function submitToLarkBase(
  fields: Record<string, string | number | boolean | string[]>,
  resume?: File
): Promise<void> {
  let resumePayload: ResumePayload | undefined;
  if (resume) {
    resumePayload = {
      name: resume.name,
      type: resume.type || "application/octet-stream",
      size: resume.size,
      content: await fileToBase64(resume),
    };
  }

  const res = await fetch("/api/apply", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fields, resume: resumePayload }),
  });

  if (!res.ok) {
    throw new Error(`Submission failed: ${res.status}`);
  }
}
