//Worst case: O(n^2)
//Avg case: O(nlogn)

function quickSort(array) {
  if(array.length < 2) {
    return array;
  }
  //choose pivot: 
  //most left, most right, median, random
  let pivot = array[array.length - 1]

  let left = []
  let right = []

  for (let i = 0; i < array.length-1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [-6, 20, 8, -2,8, 4];
console.log(quickSort(arr));
console.log(arr);