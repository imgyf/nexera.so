const LARK_WEBHOOK_URL = import.meta.env.VITE_LARK_WEBHOOK_URL;

export async function submitToLarkBase(
  fields: Record<string, string | number | string[]>
): Promise<void> {
  if (!LARK_WEBHOOK_URL) {
    throw new Error("VITE_LARK_WEBHOOK_URL is not configured");
  }

  const res = await fetch(LARK_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });

  if (!res.ok) {
    throw new Error(`Lark webhook failed: ${res.status}`);
  }
}
