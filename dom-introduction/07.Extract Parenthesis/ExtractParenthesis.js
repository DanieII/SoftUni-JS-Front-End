function extract(content) {
  const text = document.getElementById(content).textContent;
  const regex = /\(.+?\)/g;
  const matches = text.match(regex).map((match) => match.slice(1, -1));

  return matches.join("; ");
}
