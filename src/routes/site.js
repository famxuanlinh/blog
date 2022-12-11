var express = require('express');
const router = express.Router();

const siteController = require('../public/app/controllers/SiteController');

router.use('/search', siteController.search)
router.use('/', siteController.index)

module.exports = router;
