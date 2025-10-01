const heapify = (arr, n, i) => {
  while (true) {
    let largest = i,
      left = 2 * i + 1,
      right = 2 * i + 2;
    if (left < n && arr[largest] < arr[left]) {
      largest = left;
    }
    if (right < n && arr[largest] < arr[right]) {
      largest = right;
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    } else {
      break;
    }
  }
};

const heapSort = (arr) => {
  let n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
};

const arr = [7, 5, 45, 65, 3, 5, 2, 1, 4, 6, 7, 8, 9, 2, 1];
console.log(heapSort(arr));
