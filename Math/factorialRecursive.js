//O(n)
function factorialRecursive(n) {
  return n === 1 ? 1 : n * factorialRecursive(n-1);
}

console.log(factorialRecursive(1));
console.log(factorialRecursive(2));
console.log(factorialRecursive(3));
console.log(factorialRecursive(4));
console.log(factorialRecursive(5));