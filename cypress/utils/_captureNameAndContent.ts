export function _captureNameAndContent(inputString: string): {
  name: string | null;
  content: string | null;
} {
  const match = inputString.match(/([^()]+)\(([^)]+)\)/);

  return { name: match?.[1] || null, content: match?.[2] || null };
}
