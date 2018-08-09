var express = require("express");
var Content = require("../models/Content.js");

var router = express.Router();

// Save seperate content
router.get("/:id", function(req, res, next) {
  Content.findById(req.params.id, function(err, content) {
    if (err) return next(err);
    res.json(content);
  });
});

// Save content
router.post("/", function(req, res, next) {
  Content.create(req.body, function(err, content) {
    if (err) return next(err);
    res.json(content);
  });
});
module.exports = router;
