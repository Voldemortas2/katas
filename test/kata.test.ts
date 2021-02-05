import { descendingOrder, findMissingLetter } from "../src/kata";

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
