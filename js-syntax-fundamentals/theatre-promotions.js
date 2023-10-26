function theatrePromotions(typeOfDay, personAge) {
  if (personAge < 0 || personAge > 122) {
    console.log("Error!");
    return;
  }

  if (personAge >= 0 && personAge <= 18) {
    if (typeOfDay === "Weekday") {
      console.log("12$");
    } else if (typeOfDay === "Weekend") {
      console.log("15$");
    } else if (typeOfDay === "Holiday") {
      console.log("5$");
    }
  } else if (personAge > 18 && personAge <= 64) {
    if (typeOfDay === "Weekday") {
      console.log("18$");
    } else if (typeOfDay === "Weekend") {
      console.log("20$");
    } else if (typeOfDay === "Holiday") {
      console.log("12$");
    }
  } else if (personAge > 64 && personAge <= 122) {
    if (typeOfDay === "Weekday") {
      console.log("12$");
    } else if (typeOfDay === "Weekend") {
      console.log("15$");
    } else if (typeOfDay === "Holiday") {
      console.log("10$");
    }
  }
}
