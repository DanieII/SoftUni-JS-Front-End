function colorize() {
  const rows = document.querySelectorAll("tr");
  console.log(rows.length);

  for (let index = 0; index < rows.length; index++) {
    if ((index + 1) % 2 === 0) {
      rows[index].style.backgroundColor = "teal";
    }
  }
}
