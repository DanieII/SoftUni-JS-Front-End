function sumTable() {
  const rows = document.querySelectorAll("tr");
  const totalElement = rows[rows.length - 1];
  let sum = 0;

  for (let index = 0; index < rows.length; index++) {
    if (index === 0 || index === rows.length - 1) {
      continue;
    }

    const row = rows[index];
    const currentPrice = Number(row.children[1].textContent);
    console.log(currentPrice);
    sum += currentPrice;
  }

  totalElement.children[1].textContent = sum;
}
