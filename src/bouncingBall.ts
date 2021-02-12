export default function bouncingBall(
  h: number,
  bounce: number,
  window: number
): number {
  if (h <= 0) return -1;
  if (bounce <= 0) return -1;
  if (bounce >= 1) return -1;
  if (window >= h) return -1;
  let counter = -1;
  while (window < h) {
    h *= bounce;
    counter += 2;
  }
  return counter;
}
