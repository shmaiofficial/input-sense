export function sequentialPatternRule(value) {
  if (!value) return null;

  const normalized = value.trim().toLowerCase();
  if (normalized.length < 3) return null;

  const sequences = ["0123456789", "abcdefghijklmnopqrstuvwxyz"];

  for (const sequence of sequences) {
    if (sequence.includes(normalized)) {
      return "Input looks like a sequential pattern";
    }
  }

  return null;
}
