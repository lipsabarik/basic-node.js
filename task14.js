function reversedArray(arr){
    let n=arr.length;
    for(let i=0; i<arr.length/2;i++){
        let temp=arr[i];
        arr[i]=arr[n-i-1];
        arr[n-i-1]=temp;
    }
}
const arr=[1,2,3,4,5,6]
reversedArray(arr)
console.log(arr.join(""))