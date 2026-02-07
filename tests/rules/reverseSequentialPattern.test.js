import { describe, it, expect } from "vitest";
import { reverseSequentialPatternRule } from "../../rules/reverseSequentialPattern.js";

describe("reverseSequentialPatternRule", () => {
    it("detects reverse sequential patterns", () => {
        const result = reverseSequentialPatternRule("9876");
        expect(result).toBeTruthy();
    });

    it("returns null for non-sequential input", () => {
        const result = reverseSequentialPatternRule("Harshit");
        expect(result).toBe(null);
    });
});