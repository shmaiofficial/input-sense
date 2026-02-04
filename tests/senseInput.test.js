import { describe, it, expect } from "vitest";
import { senseInput } from "../index.js"

describe("senseInput", () => {
    it("returns null for valid input", () => {
        const result = senseInput("Harshit");
        expect(result).toBe(null);
    });
});