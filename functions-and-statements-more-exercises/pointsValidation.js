function pointsValidation(points) {
  const [x1, y1, x2, y2] = points;
  function getDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  function validateDistance(distance) {
    return Number.isInteger(distance);
  }

  function validatePoints(x1, y1, x2, y2) {
    const distance = getDistance(x1, y1, x2, y2);
    const isValid = validateDistance(distance);
    const message = isValid ? "valid" : "invalid";
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${message}`);
  }

  validatePoints(x1, y1, 0, 0);
  validatePoints(x2, y2, 0, 0);
  validatePoints(x1, y1, x2, y2);
}
