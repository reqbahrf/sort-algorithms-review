const partition = (arr, start, end) => {
  const pivot = arr[end];
  let i = start - 1,
    j = start;

  for (; j <= end - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  i++;
  [arr[i], arr[end]] = [arr[end], arr[i]];
  return i;
};

const quickSort = (arr, start, end) => {
  if (end <= start) return arr;

  const pivot = partition(arr, start, end);
  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);
  return arr;
};

const arr = [7, 5, 45, 65, 3, 5, 2, 1, 4, 6, 7, 8, 9, 2, 1];
console.log(quickSort(arr, 0, arr.length - 1));
