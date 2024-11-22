const postsList = require("../data/posts");

function unknownEndPoint(req, res, next) {
  const id = parseInt(req.params);
  console.log(req.params.id);
  if (id > postsList.length) {
    console.log("ciao");
    return res.status(404).json({ message: "Route not found" });
  }
  next();
}

function errorHandler(err, req, res, next) {
  res.status(500).json({ message: "Internal Server Error" });
}

module.exports = { errorHandler, unknownEndPoint };
