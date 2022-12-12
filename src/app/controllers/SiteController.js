const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../until/mongoose");

class SiteController {
  //[GET] /
  index(req, res, next) {
    //Viết theo dạng promise
    Course.find({})
      .then((courses) => {
        //Vì lỗi bảo mật của handlebá từ 4.6 trở lên. Nên cta phải chuyển nó thành 1 object bình thường
       
        res.render("home", { 
          courses: multipleMongooseToObject(courses) });
      })
      .catch(next);

    //Viết theo dạng callback
    // Course.find({}, function (err, courses) {
    //   if (!err) {
    //     res.json(courses);
    //     return;
    //   }
    //   next(err)
    // });

    // res.render('home')
  }

  // [GET] /search
  search(req, res) {
    return res.render("search");
  }
}

module.exports = new SiteController();
