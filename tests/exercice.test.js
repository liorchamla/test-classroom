import { add } from "../src/exercice.js";

describe("Exercice de JS", () => {
    it("should add 2 numbers", () => {
        const result = add(5, 5);
        expect(result).toBe(10);
    })
})