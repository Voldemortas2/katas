//for class G964 but prettier
export default class G852 {
  public static decompose = (n: number, isFirst = true): number[] | null => {
    let answer = [];
    const square = isFirst ? n ** 2 : n;
    const root = isFirst ? n : Math.sqrt(n);
    let counter = isFirst ? root - 1 : Math.floor(root);
    while (counter > 0) {
      let temp = G852.decompose(square - counter ** 2, false);
      if (isSortedAndAddsUp([...temp, counter])) {
        answer = [...temp, counter];
        break;
      }
      counter--;
    }
    if (isFirst && answer.length === 0) return null;
    return answer;

    function isSortedAndAddsUp(arr: number[]): boolean {
      return (
        arr.reduce(
          (acc: boolean, cur, index) =>
            index === 0 ? true : cur > arr[index - 1] && acc,
          true
        ) && arr.reduce((acc, cur) => acc + cur ** 2, 0) === square
      );
    }
  };
}
