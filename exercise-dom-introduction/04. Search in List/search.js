function search() {
  const towns = document.querySelectorAll("li");
  const searchText = document.querySelector("#searchText").value;
  const resultContainer = document.querySelector("#result");
  let matches = 0;

  for (const town of towns) {
    town.style.fontWeight = "";
    town.style.textDecoration = "";
  }

  for (const town of towns) {
    console.log(town.textContent, searchText);
    if (town.textContent.includes(searchText)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      matches++;
    }
  }

  resultContainer.textContent = `${matches} matches found`;
}
