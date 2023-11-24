function softUniStudents(input) {
  const courses = [];

  for (const action of input) {
    if (action.includes(":")) {
      let [name, capacity] = action.split(": ");
      capacity = Number(capacity);
      let courseExists = false;

      for (const course of courses) {
        if (course.name === name) {
          course.capacity += capacity;
          courseExists = true;
          break;
        }
      }

      if (!courseExists) {
        courses.push({ name, capacity, students: [] });
      }
    } else if (action.includes("joins")) {
      const [usernameAndCredits, emailAndCourseName] =
        action.split(" with email ");
      let [username, credits] = usernameAndCredits.split("[");
      const [email, courseName] = emailAndCourseName.split(" joins ");
      credits = Number(credits.slice(0, -1));

      for (const course of courses) {
        if (course.name === courseName) {
          if (course.students.length < course.capacity) {
            course.students.push({ username, credits, email });
          }
        }
      }
    }
  }

  const sortedCourses = courses.sort(
    (a, b) => b.students.length - a.students.length,
  );

  for (const course of sortedCourses) {
    console.log(
      `${course.name}: ${course.capacity - course.students.length} places left`,
    );

    const sortedStudents = course.students.sort(
      (a, b) => b.credits - a.credits,
    );

    for (const student of sortedStudents) {
      console.log(
        `--- ${student.credits}: ${student.username}, ${student.email}`,
      );
    }
  }
}
