function wordsUppercase(text) {
  text = text.replace(/[^a-z0-9]/gim, " ").replace(/\s+/g, " ");
  text = text.toUpperCase().trim();
  const words = text.split(" ").join(", ");

  console.log(words);
}
