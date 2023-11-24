function sequences(input) {
  let allArrays = [];
  for (const arrayAsString of input) {
    const currentArray = JSON.parse(arrayAsString);
    allArrays.push(currentArray.sort((a, b) => b - a));
  }

  let validArrays = new Set(allArrays.map((array) => JSON.stringify(array)));
  validArrays = [...validArrays].map((array) => JSON.parse(array));

  const arraysInAscendingByLength = validArrays.sort(
    (a, b) => a.length - b.length,
  );
  for (const array of arraysInAscendingByLength) {
    console.log(`[${array.join(", ")}]`);
  }
}
