
function binarySearch(arr, element){
    
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
    let mid = Math.floor((start+end)/2);
    
    if (arr[mid] == element) {
        console.log(`${element} found at position ${mid}`)
        return mid;
    }
    if (arr[mid] > element) {
     
        end = mid - 1
    }
    if (arr[mid] < element) {
        
        start = mid + 1;
    }
    
    }
    
    return -1

}


const myArr = [2,4,5,6,77,88,120];
let target = 77;

const res = binarySearch(myArr, target);
console.log(res)

// console.log(15)