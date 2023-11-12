function factorialDivision(firstFactorialNum, secondFactorialNum) {
  function factorial(num) {
    if (num === 1) {
      return num;
    }
    return num * factorial(num - 1);
  }

  const firstFactorialResult = factorial(firstFactorialNum);
  const secondFactorialResult = factorial(secondFactorialNum);
  const result = (firstFactorialResult / secondFactorialResult).toFixed(2);
  console.log(result);
}
