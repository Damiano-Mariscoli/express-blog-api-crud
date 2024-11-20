const express = require("express");
const router = express.Router();
const postsList = require("../data/posts");
const  postController = require("../controllers/postController")

//index
router.get("/", postController.index)


//show
router.get("/:id", postController.show)


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
router.delete("/:id", postController.destroy);

module.exports = router;
