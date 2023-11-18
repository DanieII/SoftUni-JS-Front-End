function city(cityInformation) {
  for (const [key, value] of Object.entries(cityInformation)) {
    console.log(`${key} -> ${value}`);
  }
}
