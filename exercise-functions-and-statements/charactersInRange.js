function charactersInRange(char1, char2) {
  const code1 = char1.charCodeAt();
  const code2 = char2.charCodeAt();
  const startCode = Math.min(code1, code2) + 1;
  const endCode = Math.max(code1, code2) - 1;
  let resultCharacters = [];

  for (let code = startCode; code <= endCode; code++) {
    const currentCharacter = String.fromCharCode(code);
    resultCharacters.push(currentCharacter);
  }

  console.log(resultCharacters.join(" "));
}
