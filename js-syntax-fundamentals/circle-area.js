function circleArea(radius) {
  const radiusType = typeof radius;
  const isRadiusValid = radiusType === "number";
  if (!isRadiusValid) {
    console.log(
      `We can not calculate the circle area, because we receive a ${radiusType}.`,
    );
    return;
  }

  const result = Math.pow(radius, 2) * Math.PI;
  console.log(result.toFixed(2));
}
