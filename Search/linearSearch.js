//O(n)
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let arr = [-5,2,10,4,6];

console.log(linearSearch(arr, 32));
console.log(linearSearch(arr, -5));
console.log(linearSearch(arr, 2));
console.log(linearSearch(arr, 10));
console.log(linearSearch(arr, 4));
console.log(linearSearch(arr, 6));
