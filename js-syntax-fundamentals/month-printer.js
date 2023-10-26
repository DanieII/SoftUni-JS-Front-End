function monthPrinter(monthAsNumber) {
  if (monthAsNumber < 1 || monthAsNumber > 12) {
    console.log("Error!");
    return;
  }

  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  console.log(months[monthAsNumber - 1]);
}
