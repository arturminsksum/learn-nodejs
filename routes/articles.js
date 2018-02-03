const express = require('express');
const router = express.Router();

const Article = require('../mongoose/models/article');

router.get('/', function(req, res, next) {
  Article.find({}, function(err, articles) {
    res.render('articles', { articles });
  });
});

router.get('/:id', function(req, res, next) {
  Article.find({ id: req.params.id }, function(err, articles) {
    if (!articles.length) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
    }
    res.render('article', { articles });
  });
});

router.post('/', function(req, res, next) {
  const article = new Article({
    id: req.body.id,
    source: req.body.source,
    author: req.body.author,
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    urlToImage: req.body.urlToImage,
    publishedAt: Date.now(),
  });
  article.save();
  next('/');
});

router.put('/:id', function(req, res, next) {
  res.send('Adds field in the article');
});

router.delete('/:id', function(req, res, next) {
  res.send('Deletes the article');
});

module.exports = router;
