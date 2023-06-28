//O(log(n))
function binarySearch(array, target) {
  if(array.length === 0) return -1;

  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (array[middleIndex] === target) {
      return middleIndex;
    }

    if (array[middleIndex] > target) {
      rightIndex = middleIndex - 1;
    } else if (array[middleIndex] < target) {
      leftIndex = middleIndex + 1;
    }
  }
  
  return -1;
}

// let arr = [-5,2,10,4,6];
let arr = [-5,2,4,6,10];

console.log(binarySearch([], 234));
console.log(binarySearch(arr, 32));
console.log(binarySearch(arr, -5));
console.log(binarySearch(arr, 2));
console.log(binarySearch(arr, 4));
console.log(binarySearch(arr, 6));
console.log(binarySearch(arr, 10));
