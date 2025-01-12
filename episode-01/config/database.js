const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
        const connection = await mongoose.connect('mongodb://localhost:27017/episode-01', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB',connection.connection.host);
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;