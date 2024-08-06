const express = require('express');
const router = express.Router();

const newsController = require('../public/app/controllers/NewsController.js');
// newsController.index;

router.use('/', newsController.index);

module.exports = router;
