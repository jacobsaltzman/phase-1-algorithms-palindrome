function isPalindrome(word) {
  const reverseWord = word.split("").reverse().join("")
  if (word === reverseWord) {
    return true
  }
  return false
  // Write your algorithm here
}

/* 
  function that takes a word
  word is compared against its reverse
  matching is palindrome and not is not
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
