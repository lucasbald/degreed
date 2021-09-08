const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv').config();
const { checkUserEvaluation } = require('../src/service/average');

const main = (subject) => {
  if (!subject) {
    console.log(
      'Please insert a subject to be validated. \n' +
        'Accepted values: math, biology, english \n\n' +
        '<< Example: node main.js math >>'
    );
    return;
  }

  const workingDir = path.join(__dirname);
  const data = JSON.parse(fs.readFileSync(`${workingDir}/${process.env.STUDENT_DATA_FILE}`));

  let result = [];

  data[subject].forEach((student) => {
    console.log(student);
    const studentHasPassed = checkUserEvaluation(student);

    student.hasPassed = studentHasPassed;

    result.push(student);
  });

  console.log(result);
  fs.writeFileSync('./report.json', JSON.stringify(result, null, 2), 'utf8');
};

const args = process.argv.slice(2);
main(args[0]);
