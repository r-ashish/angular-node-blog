const Post = require('../models/posts.model').Post;
const PostModel = require('../models/posts.model').PostModel;

exports.createPost = (req, res) => {
  const postData = {
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    date: req.body.date,
  }
  Post.createPost(postData).then((data) => {
    res.send(data);
  });
}