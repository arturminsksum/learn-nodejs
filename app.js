const express = require('express');
const app = express();

const index = require('./routes/index');
const articles = require('./routes/articles');

app.set('view engine', 'pug');

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

app.use('/', index);
app.use('/articles', articles);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
