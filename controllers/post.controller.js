
var myPost=require("../models/post.models");

exports.getPosts = async (req, res) => {
    try {
      const posts = await myPost.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  };


  exports.createPost = async (req, res) => {
   
    const newPost = new myPost(req.body);
    try {
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  };



exports.deletePost = async (req, res) => {
  try {
    const posts = await myPost.findByIdAndRemove(req.params.id);
    res.json(posts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await myPost.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updatedPost);
    return;
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

