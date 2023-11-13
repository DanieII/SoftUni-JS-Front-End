// stone required: ((widthAndLength - 2) ** 2) * increment
// marble or lapiz required: ((widthAndLength * 4) - 4) * increment
function thePiramidOfKingDjoser(base, increment) {
  let widthAndLength = base;
  let stone = 0;
  let marble = 0;
  let lapiz = 0;
  let gold = 0;
  let steps = 1;

  function calculateRequiredStone() {
    return (widthAndLength - 2) ** 2 * increment;
  }

  function calculateRequiredDecoration() {
    return (widthAndLength * 4 - 4) * increment;
  }

  while (widthAndLength >= 1) {
    if (widthAndLength - 2 < 1) {
      gold += widthAndLength ** 2 * increment;
    } else {
      stone += calculateRequiredStone();
      const decoration = calculateRequiredDecoration();
      if (steps % 5 === 0) {
        lapiz += decoration;
      } else {
        marble += decoration;
      }
    }
    widthAndLength -= 2;
    steps++;
  }

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapiz)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor((steps - 1) * increment)}`);
}
