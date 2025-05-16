const { getAllPosts } = require("../db/posts.db");

const getPosts = async (req, res) => {
  const posts = await getAllPosts();
  res.send(posts);
};

module.exports = {
  getPosts,
};