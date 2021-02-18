import { descendingOrder, findMissingLetter, findOdd, G964 } from "../src/kata";
import { when } from "jest-when";
import mock = jest.mock;

const expectedOrNull = (expected: any, actual: any): boolean => {
  return actual === null || JSON.stringify(expected) === JSON.stringify(actual);
};

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

test("should findGaps", () => {
  const testInputs: [number, number, number][] = [
    [2, 5, 7],
    [2, 5, 5],
    [4, 130, 200],
    [6, 10, 10],
  ];
  const testExpectations: ([number, number] | null)[] = [
    [5, 7],
    null,
    [163, 167],
    null,
  ];
  testInputs.forEach((e, i) => {
    expect(
      expectedOrNull(G964.gap(...testInputs[i]), testExpectations[i])
    ).toBeTruthy();
  });
});

test("should find surrounding Fibonacci pair", () => {
  const testInputs: number[] = [14, 36, 25];
  const testExpectations: [number, number][] = [
    [3, 5],
    [5, 8],
    [5, 8],
  ];
  testInputs.forEach((e, i) => {
    expect(G964.findSurroundingFibPair(e)).toMatchObject(testExpectations[i]);
  });
});

test("should find surrounding Fibonacci product", () => {
  const testInputs: number[] = [714, 800, 4895, 5895];
  const testExpectations: [number, number, boolean][] = [
    [21, 34, true],
    [34, 55, false],
    [55, 89, true],
    [89, 144, false],
  ];
  const mockedFindFibPairs = jest.fn();
  when(mockedFindFibPairs).calledWith(714).mockReturnValue([21, 34]);
  when(mockedFindFibPairs).calledWith(800).mockReturnValue([21, 34]);
  when(mockedFindFibPairs).calledWith(4895).mockReturnValue([55, 89]);
  when(mockedFindFibPairs).calledWith(5895).mockReturnValue([55, 89]);
  mock("../src/kata", () => ({
    default: class {
      public static findSurroundingFibPair(n) {
        mockedFindFibPairs(n);
      }
    },
  }));
  testInputs.forEach((e, i) => {
    expect(G964.productFib(e)).toMatchObject(testExpectations[i]);
  });
});

test("should find surrounding Fibonacci product; integrated", () => {
  const testInputs: number[] = [714, 800, 4895, 5895];
  const testExpectations: [number, number, boolean][] = [
    [21, 34, true],
    [34, 55, false],
    [55, 89, true],
    [89, 144, false],
  ];
  testInputs.forEach((e, i) => {
    expect(G964.productFib(e)).toMatchObject(testExpectations[i]);
  });
});

test("should find squares in rect", () => {
  const testInputs: [number, number][] = [
    [5, 3],
    [3, 5],
    [5, 5],
  ];
  const testExpectations: number[][] = [[3, 2, 1, 1], [3, 2, 1, 1], null];
  testInputs.forEach((e, i) => {
    expect(
      expectedOrNull(G964.sqInRect(...e), testExpectations[i])
    ).toBeTruthy();
  });
});
