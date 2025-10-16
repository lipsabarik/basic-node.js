// let arr = [10, 20, 4, 556, 4891, 1, 12, 46];
// let smallest = Math.min(...arr);
// console.log(smallest); // Output: 1


let arr = [10, 20, 4, 556, 4891, 1, 12, 46];
let smallest = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
console.log(smallest); // Output: 1