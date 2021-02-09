import { descendingOrder, findMissingLetter, findOdd, G964 } from "../src/kata";

test("should descend string", () => {
  const testInputs = [0, 1, 42145, 145263, 123456789];
  const testExpectations = [0, 1, 54421, 654321, 987654321];
  testInputs.forEach((input, index) => {
    expect(descendingOrder(input)).toBe(testExpectations[index]);
  });
});

test("should find missing letter", () => {
  const testInputs = [[..."abcdf".split("")], [..."OQRS".split("")]];
  const testExpectations = ["e", "P"];
  testInputs.forEach((input, index) => {
    expect(findMissingLetter(input)).toBe(testExpectations[index]);
  });
});

test("should find odd number", () => {
  const testInputs = [
    [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5],
    [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5],
    [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5],
    [10],
    [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1],
    [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10],
  ];
  const testExpectations = [5, -1, 5, 10, 10, 1];
  expect(findOdd(testInputs[0])).toBe(testExpectations[0]);
  expect(findOdd(testInputs[1])).toBe(testExpectations[1]);
  expect(findOdd(testInputs[2])).toBe(testExpectations[2]);
  expect(findOdd(testInputs[3])).toBe(testExpectations[3]);
  expect(findOdd(testInputs[4])).toBe(testExpectations[4]);
  expect(findOdd(testInputs[5])).toBe(testExpectations[5]);
});

test("should play with digits", () => {
  const testInputs = [
    [89, 1],
    [92, 1],
    [695, 2],
    [46288, 3],
  ];
  const testExpectations = [1, -1, 2, 51];
  testInputs.forEach((e, i) => {
    expect(G964.digPow(e[0], e[1])).toBe(testExpectations[i]);
  });
});
