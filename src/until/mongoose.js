module.exports = {
  multipleMongooseToObject: function (mongoses) {
    return mongoses.map((mongose) => mongose.toObject());
  },
  mongoseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
