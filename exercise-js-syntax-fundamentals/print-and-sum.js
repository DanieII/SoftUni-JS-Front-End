function printAndSum(first, last) {
  let numbers = "";
  let sum = 0;
  for (let num = first; num <= last; num++) {
    numbers += num + " ";
    sum += num;
  }
  console.log(numbers);
  console.log(`Sum: ${sum}`);
}
