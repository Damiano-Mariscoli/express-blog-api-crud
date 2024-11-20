
const postsList = require("../data/posts");


function index(req, res){
        res.json(postsList);

}


function show(req, res){
    const id = req.params.id;
  const post = postsList.find((post) => post.id == id);
  if (post) {
    res.json(post);
  } else {
    res.json({ error: "Post not found" });
  }
;
}

function destroy(req, res){
    const id = req.params.id;
    const postIndex = postsList.findIndex((post) => post.id == id);
    if (postIndex !== -1) {
        postsList.splice(postIndex, 1);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
}



module.exports = { index , show , destroy }