const Comment = require("../models/comment.js");
const knex = require("../database/knex.js");
const marked = require("marked");

exports.insertComment = function(news_id, from, comment) {
  return new Promise(function(resolve, reject) {
    const insert_query = Comment.query().insert({
      news_id: news_id,
      from: from,
      comment: comment
    });
    resolve(insert_query.id);
  });
};
