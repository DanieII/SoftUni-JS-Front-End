function signCheck(...nums) {
  const negativeCount = nums.filter((num) => num < 0).length;
  if (negativeCount % 2 === 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}
