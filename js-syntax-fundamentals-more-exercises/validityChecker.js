function validityChecker(x1, y1, x2, y2) {
  function calculateDistance(firstX, firstY, secondX, secondY) {
    return Math.sqrt((secondX - firstX) ** 2 + (secondY - firstY) ** 2);
  }

  function validateDistance(firstX, firstY, secondX, secondY) {
    const distance = calculateDistance(firstX, firstY, secondX, secondY);
    let status;

    if (Number.isInteger(distance)) {
      status = "valid";
    } else {
      status = "invalid";
    }

    console.log(
      `{${firstX}, ${firstY}} to {${secondX}, ${secondY}} is ${status}`,
    );
  }

  validateDistance(x1, y1, 0, 0);
  validateDistance(x2, y2, 0, 0);
  validateDistance(x1, y1, x2, y2);
}
