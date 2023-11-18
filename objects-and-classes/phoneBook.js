function phoneBook(people) {
  const peoplePhones = {};
  for (const person of people) {
    const [personName, personPhone] = person.split(" ");
    peoplePhones[personName] = personPhone;
  }

  for (const [personName, personPhone] of Object.entries(peoplePhones)) {
    console.log(`${personName} -> ${personPhone}`);
  }
}
