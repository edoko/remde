var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");

var content = require("./routes/content.js");
var app = express();

var mongoose = require("mongoose");

var cors = require("cors");

// Node Server Port is 3001
var PORT = 3001;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(express.static(path.join(__dirname, "../build")));

// CORS
app.use(cors());

// Connect DB
//mongoose.Promise = require("bluebird");
mongoose
  .connect(
    "mongodb://localhost:27017/remde",
    { useNewUrlParser: true, promiseLibrary: require("bluebird") }
  )
  .then(() => console.log("Successfully Connect!"))
  .catch(err => console.error(err));

app.use("/api/content", content);

app.get("/", (req, res) => {
  return res.end("Successfully Working API Server!");
});

// Error 404
app.use(function(req, res, next) {
  var err = new Error("404 Not Found");
  err.status = 404;
  next(err);
});

// Enable!
app.listen(PORT);

module.exports = app;
