function generateReport() {
  const headings = document.querySelectorAll("thead th");
  const rows = document.querySelectorAll("tbody tr");
  const outputField = document.querySelector("#output");
  const checkedHeadings = {};
  const report = [];

  for (let i = 0; i < headings.length; i++) {
    const currentHeading = headings[i];
    const currentInput = currentHeading.querySelector("input");
    if (currentInput.checked) {
      const currentHeadingText = currentHeading.textContent;
      checkedHeadings[i] = currentHeadingText.trim().toLowerCase();
    }
  }

  const checkedIndexes = Object.keys(checkedHeadings).map((i) => Number(i));
  for (const row of rows) {
    const currentColumns = row.querySelectorAll("td");
    const currentRowReport = {};

    for (let i = 0; i < currentColumns.length; i++) {
      if (checkedIndexes.includes(i)) {
        const currentValue = currentColumns[i].textContent;
        currentRowReport[checkedHeadings[i]] = currentValue;
      }
    }

    report.push(currentRowReport);
  }

  outputField.value = JSON.stringify(report);
}
