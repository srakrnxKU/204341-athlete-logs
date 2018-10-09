var express = require("express");
var router = express.Router();
var news_controller = require("../controllers/news_controller.js");
var News = require("../models/news.js");
var Comment = require("../models/comment.js");

/* GET home page. */
router.get("/", async function(req, res, next) {
  const news = await news_controller.getNews();
  const coins = await news_controller.getCoins();
  res.render("index", {
    title: "ประเทศไทยในเอเชี่ยนเกมส์",
    news: news,
    coins: coins
  });
});

router.get("/news/:newsId", async function(req, res, next) {
  const news = await news_controller.getNewsById(req.params["newsId"]);
  res.render("news", news);
});

router.get("/add/news", async function(req, res, next) {
  res.render("forms/news");
});

router.post("/add/news", async function(req, res, next) {
  const newNews = await News.query().insert(req.body);
  res.redirect("/news/" + newNews.id);
});

router.post("/news/:newsId/comment", async function(req, res, next) {
  let comment = req.body;
  comment["news_id"] = parseInt(req.params["newsId"]);
  const newComment = await Comment.query().insert(comment);
  res.redirect("/news/" + req.params["newsId"]);
});
module.exports = router;
