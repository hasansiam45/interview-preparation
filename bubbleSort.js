function bubbleSort(arr,position) {
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (position == "ascending") {
             if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
        }
        
        if (position == "descending") {
         if (arr[j] < arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
        }
       
        
    }
    
    }
    
    return arr;

}


const myArr = [22, 33, 10, 45, 2, 99, 300, 100, 52];
const sortedArr = bubbleSort(myArr,"ascending");
console.log(sortedArr)