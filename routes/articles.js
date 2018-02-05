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
      const err = new Error('Article Not Found');
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
  article.save(function(err, raw) {
    if (err) {
      return handleError(err);
    }
    res.send('Article was added');
  });
});

router.post('/:id', function(req, res, next) {
  if (req.body._method === 'put') {
    Article.update(
      { id: req.params.id },
      { title: req.body.title, description: req.body.description },
      function(err, raw) {
        if (err) return handleError(err);
        res.send('Added field in the article');
      },
    );
  } else if (req.body._method === 'delete') {
    Article.find({ id: req.params.id }).remove(function(err, raw) {
      if (err) return handleError(err);
      res.send('Removed the article');
    });
  }
});

router.delete('/:id', function(req, res, next) {
  res.send('Deletes the article');
});

module.exports = router;
