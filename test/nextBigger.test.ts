import { nextBigger } from "../src/nextBigger";

describe("test next bigger", () => {
  test("small number", () => {
    expect(nextBigger(123)).toBe(132);
    expect(nextBigger(21)).toBe(-1);
  });
  test("big number", () => {
    expect(nextBigger(459853)).toBe(483559);
    expect(nextBigger(59884848483559)).toBe(59884848483595);
  });
});
