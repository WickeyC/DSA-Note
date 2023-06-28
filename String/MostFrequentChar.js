const arr = ['a', 'b', 'c', 'd', 'e', 'a', 'e', 'e'];

function mostFrequentChar(arr) {

  let charFrequencyMap = new Map();
  let mostFrequentChar = '';
  let mostFrequentCharCount = 1;

  mostFrequentChar = arr[0];

  for (let i=1; i<arr.length; i++) {
    
    if (!charFrequencyMap.has(arr[i])) {
      charFrequencyMap.set(arr[i], 1);
    } else {
      charFrequencyMap.set(arr[i], charFrequencyMap.get(arr[i])+1);
    }
    currentCount = charFrequencyMap.get(arr[i]);
    
    if (currentCount > mostFrequentCharCount) {
      mostFrequentChar = arr[i];
      mostFrequentCharCount = currentCount;
    }
  }
  return mostFrequentChar
}


console.log(mostFrequentChar(arr));

