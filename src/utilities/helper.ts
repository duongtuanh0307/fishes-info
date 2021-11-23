const makeKPermutaion = (arr: any[], k: number) => {
  const pickedIndex: number[] = [];
  do {
    const randomNum = Math.floor(Math.random() * arr.length);
    pickedIndex.push(randomNum);
  } while (pickedIndex.length < k);
  return pickedIndex.map((it) => arr[it]);
};

const calcRemainder = (dividend: number, divisor: number) => {
  const quotient = Math.floor(dividend / divisor);
  return dividend - quotient * divisor;
};

export { makeKPermutaion, calcRemainder };
