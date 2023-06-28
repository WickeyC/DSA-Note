//O(1)
function isPowerOfTwoBitWise(n) {
  if (n < 2) {
    return false;
  }

  return (n & (n-1)) === 0
}

console.log(isPowerOfTwoBitWise(32));
console.log(isPowerOfTwoBitWise(52));
console.log(isPowerOfTwoBitWise(16));
console.log(isPowerOfTwoBitWise(4));
console.log(isPowerOfTwoBitWise(5));

//O(log(n))
function isPowerOfTwo(n) {
  if (n < 2){
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0 ){
      return false;
    }
    n /= 2
  }

  return true;
}

console.log(isPowerOfTwo(32));
console.log(isPowerOfTwo(52));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));


