const students = require('./students');

function getAllStudents() {
    return students;
}

function getStudentById(id) {
    const student = students.find(student => student.id === id);

    if (!student) {
        throw new Error(`IDga ${id} tudengit ei leitud`);
    }

    return student;
}

function addStudent(student) {
    if (!student.firstName || !student.lastName || !student.curriculum) {
        throw new Error ('Tudeng peab sisaldama eesnime, perekonnanime ning õppekava');
    }


    const newId = Math.max(...students.map(student => student.id)) + 1;

    const newStudent = {
        id: newId,
        firstName: student.firstName,
        lastName: student.lastName,
        curriculum: student.curriculum
    };

    if (student.email) {
        newStudent.email = student.email;
    }

    students.push(newStudent);
    return newStudent;
}

function updateStudent(id, updatedData) {

    const student = getStudentById(id);

    if (updatedData.firstName) {
        student.firstName = updatedData.firstName;
    }

    if (updatedData.lastName) {
        student.lastName = updatedData.lastName;
    }

    if (updatedData.curriculum) {
        student.curriculum = updatedData.curriculum;
    }

    if (updatedData.email) {
        student.email = updatedData.email;
    }

    return student;
}

function deleteStudent(id) {
    const studentIndex = students.findIndex(student => student.id === id);

    if (studentIndex === -1) {
        throw new Error(`IDga ${id} tudengit ei leitud`);
    }

    const deletedStudent = students.splice(studentIndex, 1)[0];
    return deletedStudent;
}

function getRandomStudent() {
    if (students.length === 0) {
        throw new Error('Nimekirjas pole ühtegi tudengit');
    }

    const randomIndex = Math.floor(Math.random() * students.length);

    return students[randomIndex];
}

module.exports = {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent,
    getRandomStudent
};

