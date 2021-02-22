const insideRegex = /(([A-Z][a-z]*)(\d*))/;
const bracketRegex = /([\(\{\[]((([A-Z][a-z]*)(\d*))+)[\]\}\)](\d*))/;

export default function parseMolecule(formula: string): object {
  let newFormula = formula;
  let brackets = matchAll(newFormula, bracketRegex);
  while (brackets.length !== 0) {
    brackets.forEach((e) => {
      newFormula = newFormula.replace(e[0], expandBrackets(e[0]));
    });
    brackets = matchAll(newFormula, bracketRegex);
  }

  const atoms: object = matchAll(newFormula, insideRegex).reduce(
    (acc: object, cur) => {
      acc[cur[2]] = (+acc[cur[2]] || 0) + (+cur[3] || 1);
      return acc;
    },
    {}
  );
  return atoms;
}

function expandBrackets(formula: string): string {
  const expanded = matchAll(formula, bracketRegex)[0];
  const index = +expanded[6] || 1;
  const newFormula: string = expanded[2];
  const parsedMolecule = parseMolecule(newFormula);
  return Object.keys(parsedMolecule).reduce((acc, cur) => {
    return acc + cur + parsedMolecule[cur] * index;
  }, "");
}

function matchAll(str: string, regex: RegExp): string[][] {
  if (str.match(new RegExp(regex, "g")) === null) return [];
  return str.match(new RegExp(regex, "g")).map((e) => e.match(regex));
}
