export async function submitToLarkBase(
  fields: Record<string, string | number | string[]>
): Promise<void> {
  const res = await fetch("/api/apply", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });

  if (!res.ok) {
    throw new Error(`Submission failed: ${res.status}`);
  }
}
