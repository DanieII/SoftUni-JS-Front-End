function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  const bestRestaurantParagraph = document.querySelector("#bestRestaurant p");
  const bestRestaurantWorkers = document.querySelector("#workers p");
  const restaurants = {};

  function findAverageSalary(workers) {
    const sum = workers.reduce(
      (sum, worker) => (sum += Number(worker.workerSalary)),
      0,
    );
    return sum / workers.length;
  }

  function findBestSalary(workers) {
    return Math.max(...workers.map((worker) => Number(worker.workerSalary)));
  }

  function getBestRestaurant() {
    let bestRestaurant;
    for (const [restaurantName, _] of Object.entries(restaurants)) {
      const currentRestaurant = restaurants[restaurantName];
      if (!bestRestaurant) {
        bestRestaurant = currentRestaurant;
        continue;
      }

      if (bestRestaurant.averageSalary < currentRestaurant.averageSalary) {
        bestRestaurant = currentRestaurant;
      }
    }

    return bestRestaurant;
  }

  function onClick() {
    bestRestaurantParagraph.textContent = "";
    bestRestaurantWorkers.textContent = "";

    const givenRestaurants = JSON.parse(
      document.querySelector("textarea").value,
    );
    for (const restaurant of givenRestaurants) {
      let [restaurantName, workers] = restaurant.split(" - ");
      workers = workers.split(", ");

      if (!restaurants.hasOwnProperty(restaurantName)) {
        restaurants[restaurantName] = {
          restaurantName,
          workers: [],
          averageSalary: 0,
          bestSalary: 0,
        };
      }

      const currentRestaurant = restaurants[restaurantName];

      for (const worker of workers) {
        const [workerName, workerSalary] = worker.split(" ");
        currentRestaurant.workers.push({ workerName, workerSalary });
      }

      currentRestaurant.averageSalary = findAverageSalary(
        currentRestaurant.workers,
      );

      currentRestaurant.bestSalary = findBestSalary(currentRestaurant.workers);
    }

    const bestRestaurant = getBestRestaurant();

    bestRestaurantParagraph.textContent = `Name: ${
      bestRestaurant.restaurantName
    } Average Salary: ${bestRestaurant.averageSalary.toFixed(
      2,
    )} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

    const bestWorkers = [];
    for (const worker of bestRestaurant.workers.sort(
      (a, b) => Number(b.workerSalary) - Number(a.workerSalary),
    )) {
      bestWorkers.push(
        `Name: ${worker.workerName} With Salary: ${worker.workerSalary}`,
      );
    }

    bestRestaurantWorkers.textContent = bestWorkers.join(" ");
  }
}
