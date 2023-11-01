function cookingByNumbers(number, op1, op2, op3, op4, op5) {
  const operationNames = [op1, op2, op3, op4, op5];
  const operations = {
    chop: (number) => number / 2,
    dice: (number) => Math.sqrt(number),
    spice: (number) => number + 1,
    bake: (number) => number * 3,
    fillet: (number) => number * 0.8,
  };

  operationNames.forEach((operation) => {
    number = operations[operation](number);
    console.log(number);
  });
}
