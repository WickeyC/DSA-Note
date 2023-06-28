//O(log(n))
function recursiveBinarySearch(array, target) {
  return search(array, target, 0, array.length - 1);
}

function search(array, target, left, right) {
  if (left > right) {
    return -1;
  }

  let middleIndex = Math.floor((left + right) / 2);
  if (array[middleIndex] === target) {
    return middleIndex;
  }
  
  if (array[middleIndex] > target) {
    return search (array, target, left, middleIndex - 1);
  } else if (array[middleIndex] < target) {
    return search (array, target, middleIndex + 1, right);
  }
}

// let arr = [-5,2,10,4,6];
let arr = [-5,2,4,6,10];

console.log(recursiveBinarySearch([], 234));
console.log(recursiveBinarySearch(arr, 32));
console.log(recursiveBinarySearch(arr, -5));
console.log(recursiveBinarySearch(arr, 2));
console.log(recursiveBinarySearch(arr, 4));
console.log(recursiveBinarySearch(arr, 6));
console.log(recursiveBinarySearch(arr, 10));
