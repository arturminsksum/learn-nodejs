const express = require('express');
const router = express.Router();

const articles = require('../public/json/articles.json');

router.get('/', function(req, res, next) {
  res.render('articles', { articles });
});

router.get('/:id', function(req, res, next) {
  const article = articles.filter(item => item.source.id === req.params.id);
  if (!article.length) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
  res.render('article', { article });
});

router.post('/', function(req, res, next) {
  res.send('Adds the article');
});

router.put('/:id', function(req, res, next) {
  res.send('Adds field in the article');
});

router.delete('/:id', function(req, res, next) {
  res.send('Deletes the article');
});

module.exports = router;
