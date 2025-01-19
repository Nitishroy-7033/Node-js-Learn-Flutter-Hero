const mongoose = require('mongoose');


const connectDb = async () => {
    try {
        const con = await
        mongoose.connect("mongodb+srv://nroy7033:MFrrXvhXeIwAwZ4y@cluster0.mpscm.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Mongodb Connected ✅");
    } catch (ex) {
        console.error("❌ Error while connecting to MongoDB:", ex.message);
    }
};
module.exports = connectDb;