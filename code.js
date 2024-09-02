// if array is empty return -1 
// if array has elements, find middle element and if its middle return middle 
// if not middle, binary search left half the array 


function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex  = arr.length - 1;
    
   // finds middle index by adding left and right index together and dividing by 2 
    while (leftIndex <= rightIndex){
    const middleIndex = Math.floor((leftIndex + rightIndex) /2); 
    
    if(target === arr[middleIndex]) {
    return middleIndex;
    }
     else if (target > arr[middleIndex]){
    leftIndex = middleIndex + 1;
    }
    else {
    rightIndex = middleIndex - 1;
    }
    }
    return -1; 
    }
    
    
