var express = require('express');
const router = express.Router();

const newsController = require('../public/app/controllers/NewsController.js');

router.use('/:slug', newsController.show)
router.use('/', newsController.index)

module.exports = router;


