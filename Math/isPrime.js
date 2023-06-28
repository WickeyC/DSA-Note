function isPrime(n) {
  //prime number: divisible by 1 and itself only
  if (n < 2) {
    return false;
  } 

  for (let i = 2 ;i <= Math.sqrt(n);i++){
    if ((n % i) === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(35));
console.log(isPrime(37));

//O(sqrt(n))