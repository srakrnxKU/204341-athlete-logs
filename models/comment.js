const { Model } = require("objection");
const knex = require("../database/knex.js");

Model.knex(knex);

class Comment extends Model {
  static get tableName() {
    return "comments";
  }

  static get relationMappings() {
    const News = require("./news.js");
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: News,
        join: {
          from: "comments.news_id",
          to: "news.id"
        }
      }
    };
  }
}

module.exports = Comment;
