function subtract() {
  const firstNumber = document.getElementById("firstNumber");
  const secondNumber = document.getElementById("secondNumber");
  const resultContainer = document.getElementById("result");

  resultContainer.textContent =
    Number(firstNumber.value) - Number(secondNumber.value);
}
