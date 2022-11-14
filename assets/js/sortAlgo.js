const numbers = [
  54, 8, 87, 88, 100, 98, 17, 72, 67, 42, 40, 34, 55, 18, 33, 94, 59, 68, 92, 2,
];

// bubble sort / O(n^2)
const bubbleSort = (arr) => {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      // compare current element to next
      if (arr[i] > arr[i + 1]) {
        // swap using a third temp variable
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        // flag as not sorted to run loop again
        sorted = false;
      }
    }
  }

  return arr;
};

console.log(bubbleSort(numbers));

// quick sort / O(n log n)
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  // start at index 1 to ignore pivot
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};

console.log(quickSort(numbers));
