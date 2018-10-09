const { Model } = require("objection");
const knex = require("../database/knex.js");

Model.knex(knex);

class News extends Model {
  static get tableName() {
    return "news";
  }

  static get relationMappings() {
    const Comment = require("./comment.js");
    return {
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: "news.id",
          to: "comments.news_id"
        }
      }
    };
  }
}

module.exports = News;
