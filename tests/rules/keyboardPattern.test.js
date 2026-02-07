import { describe, it, expect } from "vitest";
import { keyboardPatternRule} from "../../rules/keyboardPattern.js"

describe("keyboardPatternRule",()=>{
    it("detects keyboard patterns",()=>{
        const result=keyboardPatternRule("qwerty");
        expect(result).toBeTruthy();
    });
    
    it("returns null for  normal input",()=>{
        const result=keyboardPatternRule("Harshit");
        expect(result).toBe(null);
    });
});