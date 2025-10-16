
function getsecondlargestlargest(arr){
    let largest=-1,secondlargest=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]> largest)
            largest=arr[1];
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>secondlargest && arr[i] !== largest)
            secondlargest=arr[i];
        console.log(secondlargest)

    }
    return secondlargest;
}
console.log(getsecondlargestlargest([2,3,6,6,5]));