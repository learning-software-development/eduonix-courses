let articles = [
  {
    title: 'Sport Article',
    subtitle: 'Article about Sport',
    category: 2,
    body: 'Awesome sports article, you won\'t believe!',
    author: 'Me, yes me',
    created_at: '12/12/2021',
    comments: [{
      comments_subject: {},
      comments_body: {},
      comments_author: {},
      comments_email: {},
      comments_date: {}
    }]
  }
];

function getArticles() {
  return articles;
}

function addArticle(article) {
  articles.push(article);
}

function getArticleById(id) {
  if (id >= articles.length) return null;
  return articles[id];
}

function updateArticle(article, id) {
  articles[id] = article;
}

function deleteArticle(id) {
  articles.splice(id, 1);
}

exports.getArticles = getArticles;
exports.addArticle = addArticle;
exports.getArticleById = getArticleById;
exports.updateArticle = updateArticle;
exports.deleteArticle = deleteArticle;
