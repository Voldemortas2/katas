import countSmileys from "../src/countSmileys";

test("should not find any", () => {
  expect(countSmileys([])).toBe(0);
});

test("should find smiles", () => {
  const testInputs: string[][] = [
    [":)", ";(", ";}", ":-D"],
    [";D", ":-(", ":-)", ";~)"],
    [";]", ":[", ";*", ":$", ";-D"],
    [":D", ":~)", ";~D", ":)"],
    [":)", ":(", ":D", ":O", ":;"],
  ];

  const expectedOutputs: number[] = [2, 3, 1, 4, 2];

  testInputs.forEach((e, i) => {
    expect(countSmileys(e)).toBe(expectedOutputs[i]);
  });
});
