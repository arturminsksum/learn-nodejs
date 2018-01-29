const express = require('express');
const app = express();
const router = express.Router();

const arcticles = require('./articles.json');

const arcticle = {
  author: 'Chaim Gartenberg',
  description:
    'Looking back at the hardware legacy of the Pebble with its pending Fitbit shutdown as smartwatches shift to touchscreens',
  publishedAt: '2018-01-27T18:13:56Z',
  source: { id: 'the-verge', name: 'The Verge' },
  title: 'Pebble is dead and hardware buttons are going with it',
  url:
    'https://www.theverge.com/2018/1/27/16936922/pebble-smartwatch-hardware-button-physical-controls',
  urlToImage:
    'https://cdn.vox-cdn.com/thumbor/pd3WIOBrDA20f0Tg9T9SZBwm_P8=/0x76:1100x652/fit-in/1200x630/cdn.vox-cdn.com/assets/2001833/DSC_0164-2.jpg'
};

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

router.use(function(req, res, next) {
  res.json(arcticles);
  next();
});

app.get('/articles', function(req, res) {
  res.json(arcticles);
});

app.get('/articles/:id', function(req, res, next) {
  res.json(arcticles.filter(item => item.source.id === req.params.id));
  next();
});

app.post('/articles', function(req, res) {
  res.send(arcticle);
});

app.put('/articles/:id', function(req, res) {
  res.send({
    description:
      'Looking back at the hardware legacy of the Pebble with its pending Fitbit shutdown as smartwatches shift to touchscreens'
  });
});

app.delete('/articles/:id', function(req, res) {
  res.send([]);
});

app.use('/', router);
