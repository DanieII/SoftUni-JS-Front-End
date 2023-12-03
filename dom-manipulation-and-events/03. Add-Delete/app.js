function addItem() {
  const items = document.querySelector("#items");
  const newItemElement = document.querySelector("#newItemText");
  const newItem = document.createElement("li");
  newItem.textContent = newItemElement.value;
  items.appendChild(newItem);
  newItemElement.value = "";
  addDeleteButton(newItem);

  function addDeleteButton(element) {
    const deleteButton = document.createElement("a");
    deleteButton.textContent = "[Delete]";
    deleteButton.href = "#";
    deleteButton.addEventListener("click", (e) => e.target.parentNode.remove());
    element.appendChild(deleteButton);
  }
}
