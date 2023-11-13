function login(array) {
  const username = array[0];
  const password = username.split("").reverse().join("");
  let tries = 4;
  let arrayIndex = 1;

  while (tries >= 1 && arrayIndex < array.length) {
    const currentPassword = array[arrayIndex];

    if (currentPassword === password) {
      console.log(`User ${username} logged in.`);
      return;
    }

    tries--;
    arrayIndex++;

    if (tries > 0) {
      console.log("Incorrect password. Try again.");
    }
  }
  console.log(`User ${username} blocked!`);
}
