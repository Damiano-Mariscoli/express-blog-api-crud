const express = require("express");
const router = express.Router();
const postsList = require("../data/posts");
const  postController = require("../controllers/postController")

//index
router.get("/", postController.index)


//show
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const post = postsList.find((post) => post.id == id);
  if (post) {
    res.json(post);
  } else {
    res.json({ error: "Post not found" });
  }
});

//store
router.post("/", (req, res) => {
  res.send("Creo un nuovo post");
});

//update
router.put("/:id", (req, res) => {
  res.send(`Modifico il post con id: ${req.params.id}`);
});

//modify
router.patch("/:id", (req, res) => {
  res.send(`Aggiorno il post con id: ${req.params.id}`);
});

//destroy
router.delete("/:id", (req, res) => {
  res.send(`Elimino il post con id ${req.params.id}`);
});

module.exports = router;
