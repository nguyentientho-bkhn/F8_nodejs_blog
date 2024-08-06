const express = require('express');
const router = express.Router();

const siteController = require('../public/app/controllers/SiteController.js');

router.use('/search', (req, res) => siteController.search(req, res));
router.use('/', siteController.home());

module.exports = router;
