function solve() {
  let currentId = "depot";
  let currentStopName;
  const info = document.querySelector("#info span");
  const departBtn = document.querySelector("#depart");
  const arriveBtn = document.querySelector("#arrive");

  function depart() {
    departBtn.disabled = true;
    arriveBtn.disabled = false;

    fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentId}`)
      .then((res) => res.json())
      .then((res) => {
        info.textContent = `Next stop ${res.name}`;
        currentStopName = res.name;
        currentId = res.next;
      })
      .catch((err) => {
        info.textContent = "Error";
        departBtn.disabled = false;
        arriveBtn.disabled = false;
      });
  }

  async function arrive() {
    departBtn.disabled = false;
    arriveBtn.disabled = true;

    info.textContent = `Arriving at stop ${currentStopName}`;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
