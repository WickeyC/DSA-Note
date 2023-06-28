const arr = ['a', 'b', 'c', 'd', 'e', 'a', 'e', 'e'];

function reverseArray(arr) {
  let leftPoint = 0;
  let rightPoint = arr.length - 1;

  while(leftPoint < rightPoint) {
    [arr[leftPoint], arr[rightPoint]] = [arr[rightPoint], arr[leftPoint]];

    leftPoint++;
    rightPoint--;
  }

  return arr;
}

console.log(reverseArray(arr));