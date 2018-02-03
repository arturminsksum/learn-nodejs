const mongoose = require('../index');
const Schema = mongoose.Schema;

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
