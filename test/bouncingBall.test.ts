import bouncingBall from "../src/bouncingBall";

test("height is below 0", () => {
  expect(bouncingBall(-1, 0.5, 0.5)).toBe(-1);
});
test("bounce is not above 0", () => {
  expect(bouncingBall(1, 0, 0.5)).toBe(-1);
});
test("bounce is not below 1", () => {
  expect(bouncingBall(1, 1, 0.5)).toBe(-1);
});
test("window is not below height", () => {
  expect(bouncingBall(1, 0.5, 1)).toBe(-1);
});

test("should bounce", () => {
  const testInputs: [number, number, number][] = [
    [3, 0.66, 1.5],
    [30, 0.66, 1.5],
    [30, 0.75, 1.5],
    [30, 0.4, 10],
  ];
  const expectedOutputs: number[] = [3, 15, 21, 3];
  testInputs.forEach((e, i) => {
    expect(bouncingBall(...e)).toBe(expectedOutputs[i]);
  });
});
