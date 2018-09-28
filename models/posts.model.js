const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: String,
  description: String,
  image: String,
  date: String
}); 

const PostModel = mongoose.model('Post', PostSchema);

class Post {
  constructor(){}

  static createPost(postData){
    var post = new PostModel (postData);
    return post.save();
  }
}

module.exports = {
  Post,
  PostModel,
  PostSchema
}