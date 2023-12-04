function encodeAndDecodeMessages() {
  const [messageField, encodedField] = document.querySelectorAll("textarea");
  const [encodeBtn, decodeBtn] = document.querySelectorAll("button");

  encodeBtn.addEventListener("click", handleEncodeButtonClick);
  decodeBtn.addEventListener("click", handleDecodeButtonClick);

  function handleEncodeButtonClick() {
    const message = messageField.value;
    const encodedMessage = [];

    for (const letter of message) {
      const encodedLetter = String.fromCharCode(letter.charCodeAt(0) + 1);
      encodedMessage.push(encodedLetter);
    }
    messageField.value = "";
    encodedField.value = encodedMessage.join("");
  }

  function handleDecodeButtonClick() {
    const message = encodedField.value;
    const decodedMessage = [];

    for (const letter of message) {
      const decodedLetter = String.fromCharCode(letter.charCodeAt(0) - 1);
      decodedMessage.push(decodedLetter);
    }
    encodedField.value = decodedMessage.join("");
  }
}
