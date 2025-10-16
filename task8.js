function largest(arr){
    let max=arr[0]
    for(let i=1; i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }

    }
    let arr = [10, 20, 4, 556, 4891, 1, 12, 46];
    return max;
}