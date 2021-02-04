export function descendingOrder(n: number): number {
  const stringNumber: string = `${n}`;
  const sortedStringNumber: string = stringNumber
    .split("")
    .sort((a, b) => b.localeCompare(a))
    .join("");
  return +sortedStringNumber;
}
