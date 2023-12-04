function addItem() {
  const menu = document.querySelector("#menu");

  const text = document.querySelector("#newItemText");
  const value = document.querySelector("#newItemValue");
  const optionElement = document.createElement("option");
  optionElement.textContent = text.value;
  optionElement.value = value.value;

  menu.appendChild(optionElement);

  text.value = "";
  value.value = "";
}
