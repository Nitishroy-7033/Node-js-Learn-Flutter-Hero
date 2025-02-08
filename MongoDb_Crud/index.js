const connectDb = require("./db/mongodb");
const express = require("express");
const bodyParser = require("body-parser");
const Todo = require("./models/todo");
const app = express();
app.use(bodyParser.json()); 



app.post("/todos",async (req,res)=>{
    const {title,des} = req.body;

    try{
        const todo = new Todo({title:title,des:des});
        console.log("Todo created:", todo);
        res.status(201).json(todo);
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
})


app.get("/todos",async (req,res)=>{
    try{
        const todos = await Todo.find();
        res.status(200).json(todos);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
})

app.get("/todos/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        const todo = await Todo.findById(id);
        res.status(200).json(todo);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
})

app.get("/todos/title/:title",async (req,res)=>{
    try{
        const {title} = req.params;
        const todo = await Todo.findOne({title:title});
        res.status(200).json(todo);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
})

app.delete("/todos/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        const todo = await Todo.findByIdAndDelete(id);
        res.status(200).json(todo);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
})

app.put("/todos/completed/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        const todo = await Todo.findByIdAndUpdate
        (id,{isCompleted:true},{new: true}); 
        res.status(200).json(todo);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
});












// mongodb connection
connectDb();
// end


// server start
app.listen(3000, () => {
    console.log("✅ Server running on port 3000");
    console.log("http://localhost:3000");
});
// end