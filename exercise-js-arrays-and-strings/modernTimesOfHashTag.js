function modernTimesOfHashTag(text) {
  const specialWordsRegex = /#[A-Za-z]+/gm;
  const matched = text.match(specialWordsRegex);
  for (const match of matched) {
    console.log(match.slice(1));
  }
}
