function passwordValidator(password) {
  let errors = [];

  function validateLength(password) {
    return password.length >= 6 && password.length <= 10;
  }

  function validateCharacters(password) {
    return /^[A-Za-z0-9]+$/i.test(password);
  }

  function validateDigits(password) {
    const requiredDigits = 2;
    let digitCount = 0;

    for (const char of password) {
      if (/^\d+$/.test(char)) {
        digitCount++;
      }
    }

    return digitCount >= requiredDigits;
  }

  if (!validateLength(password)) {
    errors.push("Password must be between 6 and 10 characters");
  }
  if (!validateCharacters(password)) {
    errors.push("Password must consist only of letters and digits");
  }
  if (!validateDigits(password)) {
    errors.push("Password must have at least 2 digits");
  }

  if (errors.length === 0) {
    console.log("Password is valid");
  } else {
    for (const error of errors) {
      console.log(error);
    }
  }
}
