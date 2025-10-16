function reversedArray(arr0){
    let left =0, right=arr0.length-1
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]]
    }
    left ++;
    right--;
}
let arr=[1,2,3,4,5,6,7]
reversedArray(arr)
console.log(arr.join(""))