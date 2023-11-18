function convertToJSON(name, lastName, hairColor) {
  const object = { name, lastName, hairColor };
  const objectAsJson = JSON.stringify(object);
  console.log(objectAsJson);
}
