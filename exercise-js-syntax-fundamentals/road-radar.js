function roadRadar(speed, area) {
  let limit;
  let status;

  switch (area) {
    case "motorway":
      limit = 130;
      break;
    case "interstate":
      limit = 90;
      break;
    case "city":
      limit = 50;
      break;
    case "residential":
      limit = 20;
      break;
  }

  let difference = limit - speed;

  if (difference >= 0) {
    console.log(`Driving ${speed} km/h in a ${limit} zone`);
    return;
  } else {
    difference = Math.abs(difference);

    if (difference <= 20) {
      status = "speeding";
    } else if (difference <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }

    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`,
    );
  }
}
