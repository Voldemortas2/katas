import parseMolecule from "../src/parseMolecule";

describe("test parse molecule", () => {
  test("should find bracketless molecule", () => {
    expect(parseMolecule("H2SO4")).toMatchObject({ H: 2, S: 1, O: 4 });
  });
  test("should find bracketless molecule with lowercase atom name", () => {
    expect(parseMolecule("HCl")).toMatchObject({ H: 1, Cl: 1 });
  });
  test("should add molecule atoms", () => {
    expect(parseMolecule("HOH")).toMatchObject({ H: 2, O: 1 });
  });
  test("should find molecule with single brackets", () => {
    expect(parseMolecule("Mg(OH)2")).toMatchObject({ Mg: 1, O: 2, H: 2 });
  });
  test("should find molecule with multiple brackets", () => {
    expect(parseMolecule("K4[ON(SO3)2]2")).toMatchObject({
      K: 4,
      O: 14,
      N: 2,
      S: 4,
    });
  });
});
