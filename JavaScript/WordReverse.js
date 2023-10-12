// 1) Take a sentence as an input and reverse every word in that sentence.
Example - This is a sunny day > shit si a ynnus yad. 
  
function wordReverse(sentence) {
  const words = sentence.split(' ');
  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });
  return reversedWords.join(' ');
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
