const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../until/mongoose");

class MeController {
  // [GET] /me/stored/courses
  storedCourse(req, res, next) {

    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) => 
        res.render("me/stored-courses", {
          deletedCount,
          courses: multipleMongooseToObject(courses),
        })
      )

    //Mục đích là chuyển biến deletedCount vào promise trên nên gộp lại
    
    // Course.countDocumentsDeleted()
    // .then((deletedCount) => {
    //   console.log(deletedCount)
    // })
    // .catch(() => {});

    // Course.find({})
    //   .then((courses) =>
    //     res.render("me/stored-courses", {
    //       courses: multipleMongooseToObject(courses),
    //     })
    //   )
    //   .catch(next);
  }
  // [GET] /me/trash/courses
  trashCourse(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render("me/trash-courses", {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
