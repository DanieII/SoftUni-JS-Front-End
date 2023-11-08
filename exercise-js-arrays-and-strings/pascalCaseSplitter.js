function pascalCaseSplitter(text) {
  const pascalCaseRegex = /[A-Z][a-z]*/gm;
  const matches = text.match(pascalCaseRegex);
  console.log(matches.join(", "));
}
