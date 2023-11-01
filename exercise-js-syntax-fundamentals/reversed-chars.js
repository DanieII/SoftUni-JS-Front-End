function reversedChars(firstChar, secondChar, thirdChar) {
  const chars = [firstChar, secondChar, thirdChar];
  let reverse = "";

  for (let i = chars.length - 1; i >= 0; i--) {
    const currentChar = chars[i];
    reverse += currentChar + " ";
  }

  console.log(reverse);
}

reversedChars("A", "B", "C");
