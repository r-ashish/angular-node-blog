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

exports.getPosts = (req, res) => {
  PostModel.find()
  .exec()
  .then(posts => {
    res.send(posts);
  });
}

exports.getPost = (req, res) => {
  PostModel.findOne({_id: req.params.postId})
  .exec()
  .then(posts => {
    res.send(posts);
  });
}