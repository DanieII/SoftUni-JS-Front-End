function smallestOfThreeNumbers(num1, num2, num3) {
  function findSmallestNumber(...nums) {
    return Math.min(...nums);
  }

  console.log(findSmallestNumber(...arguments));
}
