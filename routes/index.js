const express = require('express');
const router = express.Router();

const logger = require('../logger/logger');
const fullUrl = require('../helpers/helpers');

router.use(function(req, res, next) {
  logger.info(fullUrl(req));
  next();
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Front Camp' });
});

module.exports = router;
