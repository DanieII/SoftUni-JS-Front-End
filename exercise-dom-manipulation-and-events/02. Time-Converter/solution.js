function attachEventsListeners() {
  const buttons = document.querySelectorAll("input[type='button']");
  const daysText = document.querySelector("#days");
  const hoursText = document.querySelector("#hours");
  const minutesText = document.querySelector("#minutes");
  const secondsText = document.querySelector("#seconds");

  for (const button of buttons) {
    button.addEventListener("click", handleConvertButtonClick);
  }

  function handleConvertButtonClick(e) {
    const time = e.currentTarget.parentElement
      .querySelector("label")
      .textContent.slice(0, -2);

    if (time === "Days") {
      convertDays();
    } else if (time === "Hours") {
      convertHours();
    } else if (time === "Minutes") {
      convertMinutes();
    } else if (time === "Seconds") {
      convertSeconds();
    }
  }

  function convertDays() {
    hoursText.value = daysText.value * 24;
    minutesText.value = hoursText.value * 60;
    secondsText.value = minutesText.value * 60;
  }

  function convertHours() {
    daysText.value = hoursText.value / 24;
    minutesText.value = hoursText.value * 60;
    secondsText.value = minutesText.value * 60;
  }

  function convertMinutes() {
    hoursText.value = minutesText.value / 60;
    daysText.value = hoursText.value / 24;
    secondsText.value = minutesText.value * 60;
  }

  function convertSeconds() {
    minutesText.value = secondsText.value / 60;
    hoursText.value = minutesText.value / 60;
    daysText.value = hoursText.value / 24;
  }
}
