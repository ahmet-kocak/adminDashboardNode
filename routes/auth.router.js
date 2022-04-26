const express=require("express");
const router = express.Router();
const authcontroller=require("../controllers/auth.controller");


router.get("/", authcontroller.auth);
router.get("/rol", authcontroller.auth);
router.get("/app", authcontroller.auth);
router.get("/user", authcontroller.auth);
router.get("/userauth", authcontroller.auth);
router.get("/company", authcontroller.auth);
router.get("/company/detail", authcontroller.auth);


router.patch("/user/:id", authcontroller.updatePost);
router.patch("/userauth/:id", authcontroller.updatePost);
router.patch("/rol/:id", authcontroller.updatePost);
router.delete("/rol/:id", authcontroller.deletePost);

module.exports = router;
