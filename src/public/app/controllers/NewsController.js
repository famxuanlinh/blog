
class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news')
    }

    // [GET] /news/:slug
    show(req, res) {
        return res.send('news details')
    }

}

module.exports = new NewsController

// const newsController = require('./NewsController')