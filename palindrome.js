function palindrome() {
  let racecar= prompt("Enter the word RACECAR");
  let recorder = prompt("Enter the word RECORDER");

  const palindrome = (str) => str.split('').reverse().join('') === str;

  alert("Original word: " + racecar);
  alert("Original word: " + recorder);

  alert("Reversed word: " + racecar.split('').reverse().join(''));
  alert("Reversed word: " + recorder.split('').reverse().join(''));

  // Check if the strings are palindromes
  alert(racecar + " is " + palindrome(racecar));
  alert(recorder + " is " + palindrome(recorder));
}
