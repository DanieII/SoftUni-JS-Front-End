function solve() {
  let board = [];
  const table = document.querySelector("table");
  const resultContainer = document.querySelector("#check p");
  const rows = document.querySelectorAll("tbody tr");
  const [checkBtn, clearBtn] = document.querySelectorAll("button");

  checkBtn.addEventListener("click", handleCheckBtnClick);
  clearBtn.addEventListener("click", handleClearBtnClick);

  function handleCheckBtnClick() {
    fillBoard();
    const [rowSums, colsSums] = getRowsAndColsSums();
    const allSums = [...rowSums, ...colsSums];
    const isValid = validateSums(allSums);

    if (isValid) {
      table.style.border = "2px solid green";
      resultContainer.textContent = "You solve it! Congratulations!";
      resultContainer.style.color = "green";
    } else {
      table.style.border = "2px solid red";
      resultContainer.textContent = "NOP! You are not done yet...";
      resultContainer.style.color = "red";
    }
  }

  function handleClearBtnClick() {
    fillBoard();
    for (const row of board) {
      for (const number of row) {
        number.value = "";
      }
    }
    table.style.border = "";
    resultContainer.textContent = "";
    resultContainer.style.color = "";
  }

  function fillBoard() {
    board = [];
    for (const row of rows) {
      const columns = Array.from(row.querySelectorAll("input"));
      board.push(columns);
    }
  }

  function getRowsAndColsSums() {
    const rowSums = [];
    const colsSums = [];

    for (const row of board) {
      let currentRowSum = 0;
      for (const number of row) {
        currentRowSum += Number(number.value);
      }
      rowSums.push(currentRowSum);
    }

    for (let col = 0; col < board.length; col++) {
      let currentColsSum = 0;
      for (const row of board) {
        currentColsSum += Number(row[col].value);
      }
      colsSums.push(currentColsSum);
    }

    return [rowSums, colsSums];
  }

  function validateSums(sums) {
    const validSum = board.length * 2;

    for (const sum of sums) {
      if (sum !== validSum) {
        return false;
      }
    }

    return true;
  }
}
