export default function countSmileys(arr: string[]): number {
  return arr.filter((e) => /[:;][-~]?[)D]/.test(e)).length;
}
