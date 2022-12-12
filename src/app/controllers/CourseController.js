const Course = require("../models/Course");
const { mongoseToObject } = require("../../until/mongoose");

class CourseController {
  // [GET] /course/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", { course: mongoseToObject(course) })
      )
      .catch(next);
  }
  // [GET] /course/create
  create(req, res) {
    res.render("courses/create");
  }

  // [POST] /course/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    const course = new Course(req.body);
    course.save()
    .then(() => res.redirect('/'))
    .catch(next);

  }
}

module.exports = new CourseController();
