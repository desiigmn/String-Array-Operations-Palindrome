function palindrome() {
  let word1 = prompt("Enter the first word (eg.,RACECAR)");
  let word2 = prompt("Enter the first word (eg.,RECORDER)");

  const palindrome = (str) => str.split('').reverse().join('') === str;

  alert(`Original word 1: ${word1}`);
  alert(`Original word 2: ${word2}`);

  alert(`Reversed word 1: ${word1.split('').reverse().join('')}`);
  alert(`Reversed word 2: ${word2.split('').reverse().join('')}`);

  // Check if the strings are palindromes
  alert(`"${word1}" is ${palindrome(word1)}`);
  alert(`"${word2}" is ${palindrome(word2)}`);
}
