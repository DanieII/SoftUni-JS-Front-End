function formatGrade(grade) {
  let message;

  if (grade < 3) {
    console.log("Fail (2)");
    return;
  } else if (grade < 3.5) {
    message = "Poor";
  } else if (grade < 4.5) {
    message = "Good";
  } else if (grade < 5.5) {
    message = "Very good";
  } else if (grade >= 5.5) {
    message = "Excellent";
  }

  console.log(`${message} (${grade.toFixed(2)})`);
}

formatGrade(2);
