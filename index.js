import { repeatedCharRule } from "./rules/repeatedChar.js";
import { placeholderWordRule } from "./rules/placeholderWord.js";
import { sequentialPatternRule } from "./rules/sequentialPattern.js";
import { reverseSequentialPatternRule } from "./rules/reverseSequentialPattern.js";
import { keyboardPatternRule } from "./rules/keyboardPattern.js";

export function senseInput(value) {

    // Rule 1: repeated characters
    const repeatedCharResult = repeatedCharRule(value);
    if (repeatedCharResult) return repeatedCharResult;

    // Rule 2: placeholder words
    const placeholderWordResult = placeholderWordRule(value);
    if (placeholderWordResult) return placeholderWordResult;

    // Rule 3: sequential patterns
    const sequentialPatternResult = sequentialPatternRule(value);
    if (sequentialPatternResult) return sequentialPatternResult;

    // Rule 4: reverse sequential patterns
    const reverseSequentialPatternResult = reverseSequentialPatternRule(value);
    if (reverseSequentialPatternResult) return reverseSequentialPatternResult;

    // Rule 5: keyboard patterns
    const keyboardPatternResult = keyboardPatternRule(value);
    if (keyboardPatternResult) return keyboardPatternResult;

    // no issue found
    return null;
}