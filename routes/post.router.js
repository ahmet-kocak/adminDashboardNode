const express=require("express");
const router = express.Router();
const controller=require("../controllers/post.controller");

 


router.get("/", controller.getPosts);
router.post("/", controller.createPost);
router.delete("/:id", controller.deletePost)
router.patch("/:id", controller.updatePost);
module.exports = router;



