import findOutliers from "../src/outlier";

test("should find outliers", () => {
  const testInputs: number[][] = [
    [2, 4, 0, 100, 4, 11, 2602, 36],
    [160, 3, 1719, 19, 11, 13, -21],
    [0, 1, 2],
    [1, 2, 3],
    [2, 6, 8, 10, 3],
    [0, 0, 3, 0, 0],
    [1, 1, 0, 1, 1],
  ];

  const expectedOutputs: number[] = [11, 160, 1, 2, 3, 3, 0];

  testInputs.forEach((e, i) => {
    expect(findOutliers(e)).toBe(expectedOutputs[i]);
  });
});
