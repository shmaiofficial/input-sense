import { describe, it, expect } from "vitest";
import { sequentialPatternRule } from "../../rules/sequentialPattern.js";

describe("sequentialPatternRule", () => {
    it("detects sequential patterns", () => {
        const result = sequentialPatternRule("1234");
        expect(result).toBeTruthy();
    });

    it("returns null for non-sequential input", () => {
        const result = sequentialPatternRule("Harshit");
        expect(result).toBe(null);
    });
});