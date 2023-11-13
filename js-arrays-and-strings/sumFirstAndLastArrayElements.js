function sumFirstAndLastArrayElements(array) {
  const first = array.shift();
  const last = array.pop();
  console.log(first + last);
}
