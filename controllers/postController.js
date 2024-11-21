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

function update(req, res) {
  let id = req.params.id;
  if (isNaN(id)) {
    id = id.toLowerCase();
  } else {
    id = parseInt(id);
  }

  const postIndex = postsList.findIndex((post) => post.id === id);
  const post = postsList[postIndex];
  const { title, slug, content, image, tags } = req.body;
  post.title = title;
  post.slug = slug;
  post.content = content;
  post.image = image;
  post.tags = tags;
  console.log(postsList);
  res.sendStatus(200);
}

function modify(req, res) {
  let id = req.params.id;
  if (isNaN(id)) {
    id = id.toLowerCase();
  } else {
    id = parseInt(id);
  }

  const postIndex = postsList.findIndex((post) => post.id === id);
  const post = postsList[postIndex];
  const { title, slug, content, image, tags } = req.body;
  if (title) post.title = title;
  if (slug) post.slug = slug;
  if (content) post.content = content;
  if (image) post.image = image;
  if (tags) post.tags = tags;
  console.log(postsList);
  res.sendStatus(200);
}

module.exports = { index, show, destroy, store, update, modify };
