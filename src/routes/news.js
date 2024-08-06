const express = require('express');
const router = express.Router();

const newsController = require('../public/app/controllers/NewsController.js');

router.get('/:slug', (req, res) => newsController.show(req, res));
router.use('/', newsController.index);

module.exports = router;
