const PLACEHOLDER_WORDS = ["test", "admin", "user", "demo", "abc", "xyz"];

export function placeholderWordRule(value) {
  if (!value) return null;

  const normalized = value.trim().toLowerCase();

  if (PLACEHOLDER_WORDS.includes(normalized)) {
    return "Input looks like a placeholder word";
  }

  return null;
}
