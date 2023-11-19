function towns(input) {
  const towns = [];

  input.forEach((town) => {
    let [name, latitude, longitude] = town.split(" | ");
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);
    towns.push({ town: name, latitude, longitude });
  });

  towns.map((town) => console.log(town));
}
