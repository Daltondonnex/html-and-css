let arr = [5,7,9,2,1,3];
function bubblesort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j<arr.length-i-1; j++) {
            if(arr[j]>arr[j+1]){
                const temp=arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log("The unsorted array is :"+" "+arr);
const array=bubblesort(arr);
console.log("The sorted array :"+" "+array);