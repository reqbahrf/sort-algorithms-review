const merge = (leftArr, rightArr, arr) => {
  let leftArrLeng = leftArr.length,
    rightArrleng = rightArr.length;
  let i = 0,
    l = 0,
    r = 0;

  while (l < leftArrLeng && r < rightArrleng) {
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
  while (l < leftArrLeng) {
    arr[i] = leftArr[l];
    i++;
    l++;
  }
  while (r < rightArrleng) {
    arr[i] = rightArr[r];
    i++;
    r++;
  }
};
const mergeSort = (arr) => {
  let n = arr.length;
  if (n <= 1) return arr;
  let i = 0,
    j = 0;
  const middle = Math.floor(n / 2),
    leftArr = [],
    rightArr = [];
  for (; i < n; i++) {
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
