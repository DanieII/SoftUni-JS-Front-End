function meetings(appointments) {
  const meetings = {};
  for (const appointment of appointments) {
    const [dayOfWeek, personName] = appointment.split(" ");
    if (meetings.hasOwnProperty(dayOfWeek)) {
      console.log(`Conflict on ${dayOfWeek}!`);
    } else {
      meetings[dayOfWeek] = personName;
      console.log(`Scheduled for ${dayOfWeek}`);
    }
  }

  for (const [dayOfWeek, personName] of Object.entries(meetings)) {
    console.log(`${dayOfWeek} -> ${personName}`);
  }
}
