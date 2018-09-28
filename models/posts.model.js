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

  static updatePost(id, postData) {
    return PostModel.findOneAndUpdate({_id: id}, postData, {new: false}).exec()
  }
}

module.exports = {
  Post,
  PostModel,
  PostSchema
}