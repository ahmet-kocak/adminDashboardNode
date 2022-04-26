const User=require("../models/user.model")

  exports.auth = async (req, res) => {
    try {
      const posts1 = await User.find();
      await res.status(200).json(posts1);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }

  
exports.deletePost = async (req, res) => {
  try {
    const posts = await User.findByIdAndRemove(req.params.id);
    res.json(posts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};


exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updatedPost);
    return;
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
