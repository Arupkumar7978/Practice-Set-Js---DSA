const findMaxOccurance = (arr) => {
  arr = arr.sort();
  let result = arr[0],
    currentCount = 1,
    maxCount = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentCount++;
    } else currentCount = 1;

    if (currentCount > maxCount) {
      maxCount = currentCount;
      result = arr[i - 1];
    }
  }
  return result;
};

const arr = [1, 2, 2, 2, 3, 3, 3];

let result = findMaxOccurance(arr);

console.log(result);
