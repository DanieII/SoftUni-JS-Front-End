function addItem() {
  const items = document.querySelector("#items");
  const newItemElement = document.querySelector("#newItemText");
  const newItem = document.createElement("li");
  newItem.textContent = newItemElement.value;
  items.appendChild(newItem);
  newItemElement.value = "";
}
