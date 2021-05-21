function linearSearch(arr, element) {
 for (let i = 0; i < arr.length; i++) {
     const item = arr[i];
     if (item === element) {
         console.log(`${element} found at position ${i}`)
         return i;
     }
     
 }

}


const arr = [1, 5, 3, 6, 7, 4, 9]
const target = 6;

linearSearch(arr,target)