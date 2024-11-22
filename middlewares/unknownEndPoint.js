const postsList = require("../data/posts");

function unknownEndPoint(req, res, next) {
  res.status(404);
  res.json({
    error: "not found",
    message: "Post non trovato",
  });
}

module.exports = unknownEndPoint;
