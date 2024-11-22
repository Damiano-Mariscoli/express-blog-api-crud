const express = require("express");
const app = express();
const port = 3000;
const unknownEndPoint = require("./middlewares/unknownEndPoint.js");
const errorsHandler = require("./middlewares/errorHandler.js");
const postsRouter = require("./routers/posts.js");

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  throw new Error("errore finto");
});

app.use("/posts", postsRouter);

app.use(unknownEndPoint);
app.use(errorsHandler);
app.listen(port, () => {
  console.log(`server in ascolto sulla porta: ${port}`);
});
