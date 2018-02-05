const express = require('express');
const router = express.Router();

const Article = require('../mongoose/models/article');

const logger = require('../logger');
const helpers = require('../helpers');
const fullUrl = helpers.fullUrl;

router.use(function(req, res, next) {
  logger.info(fullUrl(req));
  next();
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'See articles' });
});

module.exports = router;
