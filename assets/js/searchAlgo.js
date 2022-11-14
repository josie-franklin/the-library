const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

// linear search / O(n)
const linearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch(data, 12))

// binary search / O(log n) (only works if array is sorted)
const binarySearch = (arr, num, left, right) => {
  let middle = Math.floor((left + right) / 2);

  if (left > right) {
    return -1;
  } else if (num === arr[middle]) {
    return middle;
  } else if (num < arr[middle]) {
    return binarySearch(arr, num, left, middle - 1);
  } else {
    return binarySearch(arr, num, middle + 1, right);
  }
};

console.log(binarySearch(data, 12, 0, data.length - 1));
