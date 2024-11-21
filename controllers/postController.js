const postsList = require("../data/posts");

const { post } = require("../routers/posts");

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
  let newIndex = postsList[postsList.length - 1].id + 1;
  const newPost = {
    id: newIndex,
    title: req.body.title,
    slug: req.body.slug,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  };
  console.log(newPost);
  postsList.push(newPost);
  res.send("creo un nuovo post");
}

module.exports = { index, show, destroy, store };
