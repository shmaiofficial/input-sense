export function reverseSequentialPatternRule(value) {
    if (!value) return null;

    const normalized = value.trim().toLowerCase();
    if (normalized.length < 3) {
        return null;
    }

    const sequences = ["9876543210", "zyxwvutsrqponmlkjihgfedcba"];

    for (const sequence of sequences) {
        if (sequence.includes(normalized)) {
            return "Input looks like a reverse sequential pattern";
        }
    }

    return null;
}