const mongoose = require("mongoose");
const connectionString = "mongodb+srv://nroy7033:yudTFkWxgpTXHjm0@cluster0.doy7c.mongodb.net/";
const connectDb = async () => {

  try {
    const conn = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
    console.log(`HOST : ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDb;
