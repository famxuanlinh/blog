const mongoose = require("mongoose");

//connect to database
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected successfully");
  } catch (err) {
    console.log("Connected failed");
  }
}

module.exports = { connect };
