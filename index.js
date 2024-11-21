const express = require("express");
const postsRouter = require("./routers/posts.js");

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("public"));

app.use("/posts", postsRouter);

app.get("/bacheca", (req, res) => {
  const postCount = posts.length;
  res.json({ posts: posts, count: postCount });
});

app.listen(port, () => {
  console.log(`server in ascolto sulla porta: ${port}`);
});
