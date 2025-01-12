export function validateInput(input) {
    if (!input.name || !input.age || !input.id) {
        throw new Error("All fields (name, age, id) are required.");
    }
    if (typeof input.age !== 'number' || input.age <= 0) {
        throw new Error("Age must be a positive number.");
    }
}

export function formatStudentData(student) {
    return `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}`;
}