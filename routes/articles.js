const express = require('express');
const router = express.Router();

const Article = require('../mongoose/mongoose');
const articles = require('../public/json/articles.json');

router.get('/', function(req, res, next) {
  Article.find({}, function(err, articles) {
    res.render('articles', { articles });
  });
});

router.get('/:id', function(req, res, next) {
  Article.find({ 'source.id': req.params.id }, function(err, articles) {
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
    source: {
      id: 'abc-news',
      name: 'ABC News',
    },
    author: 'ABC News',
    title: 'WATCH: What to know about the water challenge',
    description:
      'Dr. Jennifer Ashton kicks off a month-long "Water Challenge" to look at how drinking more water can affect your health.',
    url: 'http://abcnews.go.com/GMA/video/water-challenge-52783678',
    urlToImage:
      'http://a.abcnews.com/images/GMA/180202_gma_ashton_16x9_992.jpg',
    publishedAt: Date.now(),
  });
  article.save();
  next();
});

router.put('/:id', function(req, res, next) {
  res.send('Adds field in the article');
});

router.delete('/:id', function(req, res, next) {
  res.send('Deletes the article');
});

module.exports = router;
