const express = require('express');
const router = express.Router();

const Article = require('../mongoose/models/article');

const logger = require('../logger/logger');
const fullUrl = require('../helpers/helpers');

router.use(function(req, res, next) {
  logger.info(fullUrl(req));
  next();
});

router.get('/', function(req, res, next) {
  Article.find({ id: 'the-verge' }, function(err, articles) {
    console.log(articles);
    res.render('index', { title: articles[0].author });
  });
});

module.exports = router;
