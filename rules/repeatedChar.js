export function repeatedCharRule(value) {
  if (!value) return null;

  const normalized = value.trim();

  const isRepeated = /^([a-zA-Z0-9])\1+$/.test(normalized);

  if (isRepeated) {
    return "Input looks like repeated characters";
  }

  return null;
}
