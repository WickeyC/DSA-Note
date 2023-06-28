//O(n^2)
function insertionSort(array) {
  //sorted | unsorted part
  for (let i = 1; i < array.length; i++) {
    let toInsert = array[i];
    let j;
    for (j = i-1; j >= 0 && array[j] > toInsert; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = toInsert;
  }
}

// function insertionSort(array) {
//   //sorted | unsorted part
//   insertIndex = 1;
//   while (insertIndex < array.length) {
//     let toInsert = array[insertIndex];
//     let i;
//     for (i = insertIndex-1; i >= 0; i--) {
//       if (array[i] > toInsert) {
//         array[i+1] = array[i];
//       } else {
//         break;
//       }
//     }
//     array[i+1] = toInsert;
//     insertIndex ++;
//   } 
// }

const arr = [8, 20, -2, 4, -6];
insertionSort(arr);
console.log(arr); //[ -6, -2, 4, 8, 20 ]