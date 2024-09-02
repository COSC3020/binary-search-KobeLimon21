// if array is empty return -1 
// if array has elements, find middle element and if its middle return middle 
// if not middle, binary search left half the array or right depending on if its greater or less than


function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex  = arr.length - 1;
    let answer = -1; // sets result to -1 automatically unless "target" is found (inputs that aren't found)
   
    while (leftIndex <= rightIndex){
    const middleIndex = Math.floor((leftIndex + rightIndex) /2); 

    
    if(target === arr[middleIndex]) {
    answer = middleIndex;
    rightIndex = middleIndex -1; // keeps searching to handle the duplicate number case
    }
     else if (target > arr[middleIndex]){
    leftIndex = middleIndex + 1;
    }
    else {
    rightIndex = middleIndex - 1;
    }
    }
    return answer; 
    }


// console.log(binarySearch([5,5,5,5] , 5)) for  duplicate number case test 
// 
    
