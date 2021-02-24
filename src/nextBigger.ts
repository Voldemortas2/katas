export function nextBigger(n: number): number {
  const string = `${n}`.split("").sort((a, b) => +b - +a);
  const bigger = +string.join("");
  if (bigger === n) return -1;
  const [toRearrange, leftDigits] = findLimit(
    `${n}`
      .split("")
      .map((e) => +e)
      .reverse()
  );
  const borderline: number = toRearrange.pop()!;
  const biggerThanBorderline = toRearrange
    .filter((e) => e > borderline)
    .sort((a, b) => a - b)[0];
  toRearrange.splice(toRearrange.indexOf(biggerThanBorderline), 1);
  leftDigits.push(biggerThanBorderline);
  toRearrange.push(borderline);
  leftDigits.push(...toRearrange.sort((a, b) => a - b));
  return leftDigits.reduce((acc, cur) => acc * 10 + cur, 0);
}

function findLimit(digits: number[]): [number[], number[]] {
  let answer: number[] = [digits.shift()!];
  while (true) {
    answer.push(digits.shift()!);
    const answerLength = answer.length;
    if (answer[answerLength - 1]! < answer[answerLength - 2]!) {
      break;
    }
  }
  return [answer, digits.reverse()];
}
