const merge = (leftArr, rightArr, arr) => {
  const leftSize = leftArr.length;
  const rightSize = rightArr.length;
  let i = 0,
    l = 0,
    r = 0;

  while (l < leftSize && r < rightSize) {
    if (leftArr[l] < rightArr[r]) {
      arr[i] = leftArr[l];
      i++;
      l++;
    } else {
      arr[i] = rightArr[r];
      i++;
      r++;
    }
  }
  while (l < leftSize) {
    arr[i] = leftArr[l];
    i++;
    l++;
  }
  while (r < rightSize) {
    arr[i] = rightArr[r];
    i++;
    r++;
  }
};
const mergeSort = (arr) => {
  const length = arr.length;
  if (length <= 1) return arr;

  const middle = Math.floor(length / 2);
  const leftArr = [];
  const rightArr = [];

  let i = 0,
    j = 0;

  for (; i < length; i++) {
    if (i < middle) {
      leftArr[i] = arr[i];
    } else {
      rightArr[j] = arr[i];
      j++;
    }
  }
  mergeSort(leftArr);
  mergeSort(rightArr);
  merge(leftArr, rightArr, arr);

  return arr;
};

const arr = [7, 5, 45, 65, 3, 5, 2, 1, 4, 6, 7, 8, 9, 2, 1];

console.log(mergeSort(arr));
