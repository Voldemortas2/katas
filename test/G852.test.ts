import G852 from "../src/G852";

describe("test decompose", () => {
  test("test 1", () => {
    expect(G852.decompose(11)).toStrictEqual([1, 2, 4, 10]);
  });
  test("test 4", () => {
    expect(G852.decompose(4)).toStrictEqual(null);
  });
  test("test 44", () => {
    expect(G852.decompose(44)).toStrictEqual([2, 3, 5, 7, 43]);
  });
  test("test 50", () => {
    expect(G852.decompose(50)).toStrictEqual([1, 3, 5, 8, 49]);
  });
});
