function addressBook(people) {
  let peopleAddresses = {};
  for (const information of people) {
    const [personName, personAddress] = information.split(":");
    peopleAddresses[personName] = personAddress;
  }

  peopleAddresses = Object.entries(peopleAddresses);
  peopleAddresses.sort(function (a, b) {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  });
  for (const [personName, personAddress] of peopleAddresses) {
    console.log(`${personName} -> ${personAddress}`);
  }
}
