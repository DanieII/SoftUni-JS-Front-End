function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    const currentMultiplication = num * i;
    console.log(`${num} X ${i} = ${currentMultiplication}`);
  }
}
