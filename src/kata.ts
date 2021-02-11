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
  public static gap = (
    g: number,
    m: number,
    n: number
  ): null | [number, number] => {
    let primes = G964.findPrimes(m, n);
    let filteredPrimes = primes.filter((n, i) => {
      if (i === 0) return false;
      return n - primes[i - 1] === g;
    });
    if (filteredPrimes.length === 0) return null;
    return [filteredPrimes[0] - g, filteredPrimes[0]];
  };
  private static findPrimes = (
    minBoundary: number,
    maxBoundary: number
  ): number[] => {
    let sieve = [2];
    let composites = Array.from(Array(maxBoundary - 1), (_, i) => i + 2);
    let primes = composites.filter((e) => e % sieve[sieve.length - 1] !== 0);
    while (sieve[sieve.length - 1] < Math.sqrt(maxBoundary)) {
      sieve.push(primes.shift()!);
      primes = primes.filter((e) => e % sieve[sieve.length - 1] !== 0);
    }
    return [...sieve, ...primes].filter((e) => e >= minBoundary);
  };

  public static productFib = (prod: number): [number, number, boolean] => {
    const fibPairs = G964.findSurroundingFibPair(prod);
    if (fibPairs[0] * fibPairs[1] === prod) return [...fibPairs, true];
    if (fibPairs[0] * fibPairs[1] > prod) return [...fibPairs, false];
    return [fibPairs[1], fibPairs[0] + fibPairs[1], false];
  };

  public static findSurroundingFibPair = (n: number): [number, number] => {
    const inputRoot = Math.sqrt(n);
    let fibonacciPairs: [number, number] = [0, 1];
    while (fibonacciPairs[1] <= inputRoot) {
      let nextMember = fibonacciPairs[0] + fibonacciPairs[1];
      fibonacciPairs = [fibonacciPairs[1], nextMember];
    }
    return fibonacciPairs;
  };
}
