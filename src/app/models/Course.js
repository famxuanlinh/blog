const mongoose = require("mongoose");
var slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, required: true },
    descripton: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name' },
    level: { type: String, maxLength: 255 },
    videoID: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", Course);
