const mongoose = require("mongoose");
function connectDB() {
  return mongoose
    .connect(process.env.MONOGO_DB)
    .then(() => {
      console.log("MongoDB Connected!");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      process.exit(1);
    });
}

module.exports = { connectDB };
