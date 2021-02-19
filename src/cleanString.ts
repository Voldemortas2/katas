export function cleanString(s: string): string {
  return s
    .split("")
    .reduce((acc: string[], cur) => {
      if (cur === "#") acc.pop();
      else acc.push(cur);
      return acc;
    }, [])
    .join("");
}
