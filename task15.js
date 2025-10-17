
// let arr = [5, 2, 8, 1, 9, 3, 7, 4, 6];{
//  let sortedArr=arr.sort((a, b) => a - b);
//   console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// }

// Process.stdout.write("sorted array:");
// arr.forEach(num=>process.stdout.write(num+""))

// }
// main();
function sort(arr,n){
  var i=0;
  while(i<n){
    var correct = arr[i]-1;
    if (arr[correct]!=arr[i]){
      swap(arr,i,correct)
    }else{
      i++
    }
    }
  }
function swap(arr,i,correct){
  var temp=arr[i];
  arr[i]=arr[correct];
   arr[correct]=temp;

}
var arr=[2,6,1,8,4,7,9]
var n=7
sort(arr,n);
for( var i=0;i<n;i++){
  console.log(arr[i]);
}