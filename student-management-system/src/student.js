class Student {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}

const students = [];

function addStudent(name, age, id) {
    const student = new Student(name, age, id);
    students.push(student);
}

function removeStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
    }
}

function listStudents() {
    return students.map(student => ({
        name: student.name,
        age: student.age,
        id: student.id
    }));
}

module.exports = {
    addStudent,
    removeStudent,
    listStudents
};

module.exports = Student;