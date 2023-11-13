function reverseArrayOfNumbers(n, array) {
  const arrayToN = array.slice(0, n);
  const reverseArrayToN = arrayToN.reverse();
  console.log(reverseArrayToN.join(" "));
}
