const readline = require('readline');
const Student = require('./student');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const studentManager = new Student();
let running = true;

const mainMenu = () => {
    console.log('\nStudent Management System');
    console.log('1. Add Student');
    console.log('2. Remove Student');
    console.log('3. List Students');
    console.log('4. Exit');
    rl.question('Choose an option: ', (option) => {
        handleUserInput(option);
    });
};

const handleUserInput = (option) => {
    switch (option) {
        case '1':
            rl.question('Enter student name: ', (name) => {
                rl.question('Enter student age: ', (age) => {
                    rl.question('Enter student ID: ', (id) => {
                        studentManager.addStudent({ name, age, id });
                        console.log('Student added successfully.');
                        mainMenu();
                    });
                });
            });
            break;
        case '2':
            rl.question('Enter student ID to remove: ', (id) => {
                studentManager.removeStudent(id);
                console.log('Student removed successfully.');
                mainMenu();
            });
            break;
        case '3':
            console.log('Student List:');
            studentManager.listStudents();
            mainMenu();
            break;
        case '4':
            console.log('Exiting...');
            running = false;
            rl.close();
            break;
        default:
            console.log('Invalid option. Please try again.');
            mainMenu();
            break;
    }
};

const init = () => {
    console.log('Initializing Student Management System...');
    mainMenu();
};

init();