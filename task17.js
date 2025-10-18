

function rotateAntiClockwise(arr, d) {
  let n = arr.length;
  d = d % n;
  let temp = arr.splice(0, d);
  arr.push(...temp);
  return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let d = 2;
console.log(rotateAntiClockwise(arr, d)); // Output: [3, 4, 5, 6, 7, 8, 1, 2]