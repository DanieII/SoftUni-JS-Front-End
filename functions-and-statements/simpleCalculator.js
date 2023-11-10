function simpleCalculator(num1, num2, operator) {
  const operators = {
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
  };

  const result = operators[operator](num1, num2);
  console.log(result);
}
