
 function secondlargest(arr) {
  let sortedArr = [...arr].sort((a, b) => b - a);
 console.log(`Largest Number: ${sortedArr[0]}`);
  console.log(`Second Largest Number: ${sortedArr[1]}`);
 }

 let arr = [12, 35, 1, 10, 34, 1];
 secondlargest(arr);


