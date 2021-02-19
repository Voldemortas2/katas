import { cleanString } from "../src/cleanString";

describe("test clean string", () => {
  test("should say empty when string is empty", () => {
    expect(cleanString("")).toBe("");
  });

  test("should say empty when string is full of #'s", () => {
    expect(cleanString("####")).toBe("");
  });

  test("should remove preceding #'s", () => {
    expect(cleanString("abc##d######")).toBe("");
    expect(cleanString("abc#d##c")).toBe("ac");
  });
});
