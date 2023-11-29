function solve() {
  const resultField = document.querySelector("#result");
  const button = document.querySelector("button");
  const selectMenu = document.querySelector("#selectMenuTo");

  for (const option of ["Binary", "Hexadecimal"]) {
    const optionElement = document.createElement("option");
    optionElement.value = option.toLowerCase();
    optionElement.text = option;

    selectMenu.appendChild(optionElement);
  }

  button.addEventListener("click", convert);

  function convert() {
    const inputNumber = Number(document.querySelector("#input").value);
    const selectedOption = selectMenu.value;
    console.log(selectMenu);
    let result;

    if (selectedOption === "binary") {
      result = inputNumber.toString(2);
    } else if (selectedOption === "hexadecimal") {
      result = inputNumber.toString(16).toUpperCase();
    }

    resultField.value = result;
  }
}
