const partition = (arr, start, end) => {
  let pivot = arr[end];
  let i = start - 1,
    j = start;
  for (; j <= end - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  i++;
  let temp = arr[i];
  arr[i] = arr[end];
  arr[end] = temp;

  return i;
};

const quickSort = (arr, start, end) => {
  if (end <= start) return arr;

  let pivot = partition(arr, start, end);
  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);

  return arr;
};

const arr = [7, 5, 45, 65, 3, 5, 2, 1, 4, 6, 7, 8, 9, 2, 1];
console.log(quickSort(arr, 0, arr.length - 1));
