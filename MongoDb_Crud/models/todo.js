const mongoose = require('mongoose');
const {Schema} = mongoose;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    des: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;