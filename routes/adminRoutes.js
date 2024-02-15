const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const { authenticateJWT } = require("../middlewares/AuthMiddleware");

router.post("/admin/register", AuthController.registerUser);
router.post("/admin/login", AuthController.loginUser);
router.get("/admin/verifyToken", authenticateJWT, AuthController.verifyToken);

module.exports = router;
