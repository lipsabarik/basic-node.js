function findIndex(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;  // return index when found
    }
  }
  return -1; // return -1 if not found
}

let arr = [15, 25, 45, 66, 78, 11];
let x = 78;

let result = findIndex(arr, x);
console.log(result);
