async function solve() {
  const userData = localStorage.getItem("userData");

  const tableBody = document.querySelector(".table tbody");

  const response = await fetch("http://localhost:3030/data/furniture");
  const result = await response.json();
}

solve();
