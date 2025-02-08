const connectDb = require("./db/mongodb");
const express = require("express");
const bodyParser = require("body-parser");
const Todo = require("./models/todo");
const app = express();
app.use(bodyParser.json());

// ✅ Create a new Todo
app.post("/todos", async (req, res) => {
    const { title, des } = req.body;
    try {
        const todo = new Todo({ title, des });
        await todo.save(); // Save the todo to the database
        console.log("Todo created:", todo);
        res.status(201).json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get all Todos
app.get("/todos", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get a Todo by ID
app.get("/todos/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get a Todo by Title
app.get("/todos/title/:title", async (req, res) => {
    try {
        const { title } = req.params;
        const todo = await Todo.findOne({ title });
        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Delete a Todo by ID
app.delete("/todos/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findByIdAndDelete(id);
        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.status(200).json({ message: "Todo deleted successfully", todo });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Mark a Todo as Completed
app.put("/todos/completed/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findByIdAndUpdate(id, { isCompleted: true }, { new: true });

        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }

        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ MongoDB Connection
connectDb();

// ✅ Start Server
app.listen(3000, () => {
    console.log("✅ Server running on port 3000");
    console.log("http://localhost:3000");
});
