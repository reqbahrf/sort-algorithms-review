function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let indexMin = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      let temp = arr[i];
      arr[i] = arr[indexMin];
      arr[indexMin] = temp;
    }
  }

  return arr;
}

const arr = [7, 4, 3, 5, 3, 2, 1, 10, 45, 30, 20];

console.log(selectionSort(arr));
