function schoolRegister(input) {
  const grades = {};

  function findStudentsAverageGrade(students) {
    const gradesSum = students.reduce(
      (sum, student) => sum + Number(student.averageGrade),
      0,
    );
    return gradesSum / students.length;
  }

  for (let student of input) {
    student = student.split(": ");
    const name = student[1].split(", ")[0];
    const grade = student[2].split(", ")[0];
    const averageGrade = student[3];

    if (averageGrade < 3) {
      continue;
    }

    if (!grades.hasOwnProperty(grade)) {
      grades[grade] = [];
    }
    grades[grade].push({ name, grade, averageGrade });
  }

  const sortedGrades = Object.entries(grades).sort((a, b) => a[0] - b[0]);
  let result = [];

  for (const [grade, students] of sortedGrades) {
    const averageGrade = findStudentsAverageGrade(students);
    result.push(
      `${Number(grade) + 1} Grade\nList of students: ${students
        .map((student) => student.name)
        .join(
          ", ",
        )}\nAverage annual score from last year: ${averageGrade.toFixed(2)}`,
    );
  }

  console.log(result.join("\n\n"));
}

schoolRegister([
  "Student name: George, Grade: 5, Graduated with an average score: 2.75",
  "Student name: Alex, Grade: 9, Graduated with an average score: 3.66",
  "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",
  "Student name: John, Grade: 9, Graduated with an average score: 2.90",
  "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",
  "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15",
]);
