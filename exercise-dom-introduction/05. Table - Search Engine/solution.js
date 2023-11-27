function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const searchField = document.querySelector("#searchField");
    const searchText = searchField.value;
    const rows = document.querySelectorAll("tbody tr");

    searchField.value = "";
    for (const row of rows) {
      row.className = "";
    }

    for (const row of rows) {
      if (row.textContent.includes(searchText)) {
        row.classList.add("select");
      }
    }
  }
}
