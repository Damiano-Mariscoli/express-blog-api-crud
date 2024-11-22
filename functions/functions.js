const postsList = require("../data/posts");

function unknownEndPoint(req, res, next) {
  res.status(404);
  res.json({
    error: "not found",
    message: "chiamata rotta inesistente",
  });
}

function errorHandler(err, req, res, next) {
  next();
}

module.exports = { errorHandler, unknownEndPoint };
