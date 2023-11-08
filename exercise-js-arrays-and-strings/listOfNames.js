function listOfNames(names) {
  const sortedAlphabetically = names.sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < sortedAlphabetically.length; i++) {
    const currentName = sortedAlphabetically[i];
    console.log(`${i + 1}.${currentName}`);
  }
}
