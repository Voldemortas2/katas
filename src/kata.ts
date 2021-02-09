export function descendingOrder(n: number): number {
  const stringNumber: string = `${n}`;
  const sortedStringNumber: string = stringNumber
    .split("")
    .sort((a, b) => b.localeCompare(a))
    .join("");
  return +sortedStringNumber;
}
export function findMissingLetter(array: string[]): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const isInputLowercase = array[0].toLowerCase() === array[0];
  const lowerCaseArray = array.map((e) => e.toLowerCase());
  let inputIndex = 0;
  let alphabetIndex = alphabet.indexOf(lowerCaseArray[0]);
  while (lowerCaseArray[inputIndex] === alphabet[alphabetIndex]) {
    alphabetIndex++;
    inputIndex++;
  }
  const answer = alphabet[alphabetIndex];
  return isInputLowercase ? answer : answer.toUpperCase();
}

export function findOdd(xs: number[]): number {
  const sortedString = xs.sort((a, b) => a - b).join(",") + ",";
  const singleDigit = sortedString.replace(/(-?\d+,)\1/g, "");
  return +singleDigit.replace(",", "");
}

export class G964 {
  public static digPow = (n: number, p: number) => {
    const digits = `${n}`.split("").map((e) => +e);
    const sum = digits.reduce((acc, cur) => acc + Math.pow(cur, p++), 0);
    const afterDivision = sum / n;
    if (afterDivision % 1 === 0) return afterDivision;
    return -1;
  };
}
