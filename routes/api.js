var express = require("express");
var router = express.Router();
var news_controller = require("../controllers/news_controller.js");
var News = require("../models/news.js");

router.get("/news", function(req, res, next) {
  news_controller.getNews().then(news => {
    res.json(news);
  });
});

router.get("/news/:newsId", function(req, res, next) {
  news_controller.getNewsById(req.params["newsId"]).then(news => {
    res.json(news);
  });
});

router.get("/coins", function(req, res, next) {
  news_controller.getCoins().then(coins => {
    res.json(coins);
  });
});

module.exports = router;
