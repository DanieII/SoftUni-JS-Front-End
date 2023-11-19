function employees(input) {
  const employees = {};

  input.forEach((employeeName) => {
    const currentNumber = employeeName.length;
    employees[employeeName] = currentNumber;
  });

  for (const [employeeName, employeeNumber] of Object.entries(employees)) {
    console.log(`Name: ${employeeName} -- Personal Number: ${employeeNumber}`);
  }
}
