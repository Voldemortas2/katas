export default function findOutliers(integers: number[]): number {
  let isMajorityOdd =
    integers.slice(0, 3).filter((e) => e % 2 === 0).length >= 2;
  let remainder = isMajorityOdd ? 1 : 0;
  return integers.filter((e) => e % 2 === remainder)[0];
}
