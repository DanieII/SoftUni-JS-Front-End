function NxNMatrix(num) {
  for (let row = 1; row <= num; row++) {
    const currentRow = [];
    for (let col = 1; col <= num; col++) {
      currentRow.push(num);
    }
    console.log(currentRow.join(" "));
  }
}
