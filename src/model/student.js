class Student {
    constructor (name, firstEvaluation, secondEvaluation) {
        this.name = name;
        this.firstEvaluation = firstEvaluation;
        this.secondEvaluation = secondEvaluation;
    }

    static help() {
        console.log(
            'Please insert a new student to see if he/she passed in that subject.' +
            '\n\n' + 
            'File to insert: students.json:'
        )
    }
}

module.exports = Student;
