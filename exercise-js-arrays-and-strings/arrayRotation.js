function arrayRotation(array, numberOfRotations) {
  for (let i = 0; i < numberOfRotations; i++) {
    array.push(array.shift());
  }
  console.log(array.join(" "));
}
