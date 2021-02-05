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
