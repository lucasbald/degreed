const Student = require('../model/student');

const checkUserEvaluation = ({ name, firstEvaluation, secondEvaluation }) => {
  const student = new Student(name, firstEvaluation, secondEvaluation);
  const studentAverage = student.calculateStudentAverage(student);

  return student.studentHasPassed(studentAverage);
};

module.exports = { checkUserEvaluation };
