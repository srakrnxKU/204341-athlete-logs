const News = require("../models/news.js");
const knex = require("../database/knex.js");
const marked = require("marked");

exports.getNews = function() {
  return new Promise(function(resolve, reject) {
    News.query()
      .select(["id", "headline", "gold_count", "silver_count", "bronze_count"])
      .orderBy("id", "desc")
      .then(result => {
        resolve(result);
      });
  });
};

exports.getCoins = function() {
  return new Promise(function(resolve, reject) {
    News.query()
      .sum("gold_count")
      .sum("silver_count")
      .sum("bronze_count")
      .then(counts => {
        resolve({
          gold: counts[0]["sum(`gold_count`)"],
          silver: counts[0]["sum(`silver_count`)"],
          bronze: counts[0]["sum(`bronze_count`)"]
        });
      });
  });
};

exports.getNewsById = function(id) {
  return new Promise(function(resolve, reject) {
    News.query()
      .eager("comments")
      .findById(id)
      .then(result => {
        result.contents = marked(result.contents);
        resolve(result);
      });
  });
};

exports.insertNews = function(
  headline,
  content,
  gold_count,
  silver_count,
  bronze_count
) {
  return new Promise(function(resolve, reject) {
    const insert_query = News.query().insert({
      headline: headline,
      content: content,
      gold_count: gold_count,
      silver_count: silver_count,
      bronze_count: bronze_count
    });
    resolve(insert_query.id);
  });
};
