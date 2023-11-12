function palindromeIntegers(integers) {
  function isPalindrome(integer) {
    const numberAsString = integer.toString();
    if (numberAsString === numberAsString.split("").reverse().join("")) {
      console.log("true");
    } else {
      console.log("false");
    }
  }

  for (const integer of integers) {
    isPalindrome(integer);
  }
}
