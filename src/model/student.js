class Student {
  constructor(name, firstEvaluation, secondEvaluation) {
    this.name = name;
    this.firstEvaluation = firstEvaluation;
    this.secondEvaluation = secondEvaluation;
  }

  calculateStudentAverage({ name, firstEvaluation, secondEvaluation }) {
    console.log(`Calculating average for student: ${name}`);
    const average = (firstEvaluation + secondEvaluation) / 2;

    return average;
  }

  studentHasPassed(average) {
    if (average > 5) return true;
    return false;
  }

  static help() {
    console.log(
      'Please insert a new student to see if he/she passed in that subject.' +
        '\n\n' +
        'File to insert: students.json:'
    );
  }
}

module.exports = Student;
