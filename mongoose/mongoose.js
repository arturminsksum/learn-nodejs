const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uri = 'mongodb://artur:artur-31@ds121088.mlab.com:21088/frontcamp';
mongoose.connect(uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('connection success');
});

const articlesSchema = new Schema({
  source: {
    id: String,
    name: String,
  },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: Date,
});

const Article = mongoose.model('Article', articlesSchema);

module.exports = Article;
