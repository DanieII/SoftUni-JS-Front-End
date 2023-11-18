function convertToObject(JSONObject) {
  const object = JSON.parse(JSONObject);
  for (const [key, value] of Object.entries(object)) {
    console.log(`${key}: ${value}`);
  }
}
