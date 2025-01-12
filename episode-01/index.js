const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');


const app = express();

connectDB();

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});