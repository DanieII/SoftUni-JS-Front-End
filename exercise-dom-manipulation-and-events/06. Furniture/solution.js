function solve() {
  const [furniture, output] = document.querySelectorAll("textarea");
  const [generateBtn, buyBtn] = document.querySelectorAll("button");
  const table = document.querySelector(".table tbody");
  const boughtItems = [];

  generateBtn.addEventListener("click", handleGenerateBtnClick);
  buyBtn.addEventListener("click", handleBuyBtnClick);

  function handleGenerateBtnClick() {
    for (const item of JSON.parse(furniture.value)) {
      const row = document.createElement("tr");

      const imageCell = document.createElement("td");
      const image = document.createElement("img");
      image.src = item.img;
      imageCell.appendChild(image);

      const nameCell = document.createElement("td");
      const name = document.createElement("p");
      name.textContent = item.name;
      nameCell.appendChild(name);

      const priceCell = document.createElement("td");
      const price = document.createElement("p");
      price.textContent = item.price;
      priceCell.appendChild(price);

      const decorationFactorCell = document.createElement("td");
      const decorationFactor = document.createElement("p");
      decorationFactor.textContent = item.decFactor;
      decorationFactorCell.appendChild(decorationFactor);

      const markCell = document.createElement("td");
      const mark = document.createElement("input");
      mark.type = "checkbox";
      markCell.appendChild(mark);

      row.appendChild(imageCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(decorationFactorCell);
      row.appendChild(markCell);

      table.appendChild(row);
    }
  }

  function handleBuyBtnClick() {
    for (const row of table.querySelectorAll("tr")) {
      const isCurrentMarkChecked = row.querySelector("input").checked;

      if (isCurrentMarkChecked) {
        const [name, price, decorationFactor] = row.querySelectorAll("p");
        const item = {
          name: name.textContent,
          price: price.textContent,
          decFactor: decorationFactor.textContent,
        };
        boughtItems.push(item);
      }
    }

    let totalPrice = 0;
    let totalDecorationFactor = 0;
    for (const item of boughtItems) {
      totalPrice += Number(item.price);
      totalDecorationFactor += Number(item.decFactor);
    }
    const averageDecorationFactor = totalDecorationFactor / boughtItems.length;

    output.value += `Bought furniture: ${boughtItems
      .map((item) => item.name)
      .join(", ")}\n`;
    output.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    output.value += `Average decoration factor: ${averageDecorationFactor}`;
  }
}
