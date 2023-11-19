function makeADictionary(input) {
  let terms = {};

  input.forEach((term) => {
    term = JSON.parse(term);
    const [termName, termDefinition] = Object.entries(term)[0];
    terms[termName] = termDefinition;
  });

  terms = Object.entries(terms).sort((a, b) => a[0].localeCompare(b[0]));

  for (const [termName, termDefinition] of terms) {
    console.log(`Term: ${termName} => Definition: ${termDefinition}`);
  }
}
