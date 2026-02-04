import { describe, it, expect } from "vitest";
import { repeatedCharRule } from "../../rules/repeatedChar";

describe("repeatedCharRule", () => {
    it("detects repeated characters", () => {
        const result = repeatedCharRule("aaaa");
        expect(result).toBeTruthy();
    });

    it("returns null for normal input", () => {
        const result = repeatedCharRule("abcd");
        expect(result).toBe(null);
    })
});