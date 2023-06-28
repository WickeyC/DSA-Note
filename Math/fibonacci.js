function fibonacci(n) {
  let fib = [0, 1, 1, 2, 3, 5, 8]; 
  if (n < 2) {
    return n;
  }
  
  return fibonacci(n-1) + fibonacci (n-2);
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));

//O(2^n)