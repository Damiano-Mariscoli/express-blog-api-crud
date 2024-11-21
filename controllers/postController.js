const postsList = require("../data/posts");

function index(req, res) {
  res.json(postsList);
}

function show(req, res) {
  let id = req.params.id;
  if (isNaN(id)) {
    id = id.toLowerCase();
  } else {
    id = parseInt(id);
  }

  const post = postsList.find((post) => post.id === id);
  const slug = postsList.find((slug) => slug.slug === id);
  if (post) {
    res.json(post);
  } else if (slug) {
    res.json(slug);
  } else {
    res.sendStatus(404);
  }
}

function destroy(req, res) {
  let id = req.params.id;
  if (isNaN(id)) {
    id = id.toLowerCase();
  } else {
    id = parseInt(id);
  }
  const postIndex = postsList.findIndex(
    (post) => post.id === id || post.slug === id
  );
  if (postIndex !== -1) {
    console.log(postIndex);
    postsList.splice(postIndex, 1);
    console.log(postsList);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
}

function store(req, res) {
  postsList.push(req.body);
  res.send("creo una nuova pizza");
}

module.exports = { index, show, destroy, store };
