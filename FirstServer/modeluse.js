const User = require("./models/user"); // Import the User class

var users = [
    new User(1, "Nitish Kumar", "Nitish@gmail.com", "HJJHGDS", "Admin"),
    new User(2, "Amit Sharma", "amit.sharma@gmail.com", "password456"),
    new User(3, "Priya Singh", "priya.singh@gmail.com", "password789"),
    new User(4, "Rahul Verma", "rahul.verma@gmail.com", "password321"),
    new User(5, "Anita Kumar", "anita.kumar@gmail.com", "password654"),
    new User(6, "Vikram Patel", "vikram.patel@gmail.com", "password987"),
    new User(7, "Rita Gupta", "rita.gupta@gmail.com", "password555"),
    new User(8, "Deepak Joshi", "deepak.joshi@gmail.com", "password666"),
    new User(9, "Sita Rani", "sita.rani@gmail.com", "password777"),
    new User(10, "Rajesh Yadav", "rajesh.yadav@gmail.com", "password888")
];

// Print the list of users to the console
console.log("All users",users);
console.log("User Number 2",users[1]);
