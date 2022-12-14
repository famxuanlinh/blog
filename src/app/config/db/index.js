const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

//connect to database
async function connect() {
  try {

    await mongoose.connect("mongodb://localhost:27017/f8_education_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log("Connected mongoose successfully");
  } catch (err) {
    console.log(err)
    console.log("Connected mongoose failed");
  }
}

module.exports = { connect };
