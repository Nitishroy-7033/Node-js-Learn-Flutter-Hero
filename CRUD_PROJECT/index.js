const express = require("express");
const Todo = require("./models/todd")
const app = express();
app.use(express.json());


var todos = [
    new Todo(1,"Make new video on Flutter","Make new video on Flutter"),
    new Todo(2,"Make new video on Flutter","Make new video on Flutter"),
    new Todo(3,"Make new video on Flutter","Make new video on Flutter"),
];



app.get('/',(req,res)=>{
    res.json("Welcome TO NODE JS CRUD VIDEO")
})

// Get all Todos
app.get('/todos',(req,res)=>{
    res.json(todos)
})

// Find By id
app.get('/todos/:id',(req,res)=>{
    const todo = todos.find(x=>x.id===parseInt(req.params.id));
    if(todo===undefined)
        return res.status(404).json("❌ Todo Not found")
    res.json(todo);
})

// Update Todo

app.put("/todos/:id",(req,res)=>{
    const {title} = req.body;
    const todo = todos.find(x=>x.id===parseInt(req.params.id));
    if(todo===undefined)
        return res.status(404).json("❌ Todo Not found")
    if(title===undefined)
        return res.status(404).json("Title is Required")
    todo.title = title;
    res.status(200).json("Todo Updated");
})

// Delete todo 
app.delete("/todos/:id",(req,res)=>{
    const todoIndex = todos.findIndex(x=>x.id===parseInt(req.params.id));
    if (todoIndex === -1) 
        return res.status(404).send('Todo not found');
    todos.splice(todoIndex,1);
    res.json("Todo deleted")
})




// create new todo 
app.post('/todos',(req,res)=>{
    const {title,des}= req.body;
    console.log("title",title);
    console.log("des",des);
    if(title === undefined || des === undefined)
    {
        return res.status(400).json("Title and des required")
    }
    const newTodo = new Todo(
        todos.length+1,
        title,
        des
    );
    todos.push(newTodo);
    res.status(201).json(" ✅ Todo Created")
})




app.listen(3000,()=>{
    console.log("✅ Service is Running on http://localhost:3000")
})