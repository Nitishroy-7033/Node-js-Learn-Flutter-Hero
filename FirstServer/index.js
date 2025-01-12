const express = require("express");

var app = express();

// app.get('/',function (req,res){
//     res.send("Hello User")
// })
app.get('/',function (req,res){
    res.status(400).json("Hello Nitish Kumar")
})
app.get('/user',function (req,res){
    res.json({
        "name":"Nitish kumar",
        "email":"nitish@gmail.com",
        "number":"32454"
    })
})
app.get('/users',function (req,res){
    res.json([
        {
            "name": "Nitish Kumar",
            "email": "nitish1@gmail.com",
            "number": "32455"
        },
        {
            "name": "Amit Sharma",
            "email": "amit.sharma@gmail.com",
            "number": "32456"
        },
        {
            "name": "Priya Singh",
            "email": "priya.singh@gmail.com",
            "number": "32457"
        },
        {
            "name": "Rahul Verma",
            "email": "rahul.verma@gmail.com",
            "number": "32458"
        },
        {
            "name": "Anita Kumar",
            "email": "anita.kumar@gmail.com",
            "number": "32459"
        },
        {
            "name": "Vikram Patel",
            "email": "vikram.patel@gmail.com",
            "number": "32460"
        },
        {
            "name": "Rita Gupta",
            "email": "rita.gupta@gmail.com",
            "number": "32461"
        },
        {
            "name": "Deepak Joshi",
            "email": "deepak.joshi@gmail.com",
            "number": "32462"
        },
        {
            "name": "Sita Rani",
            "email": "sita.rani@gmail.com",
            "number": "32463"
        },
        {
            "name": "Rajesh Yadav",
            "email": "rajesh.yadav@gmail.com",
            "number": "32464"
        }
    ])
})


app.listen(3000,function(){
    console.log("Server is running on http://localhost:3000")
})


