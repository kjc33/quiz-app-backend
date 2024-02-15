const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");
const { authenticateJWT } = require("../middlewares/AuthMiddleware");

router.post("/admin/register", AdminController.registerUser);
router.post("/admin/login", AdminController.loginUser);
router.get("/admin/verifyToken", authenticateJWT, AdminController.verifyToken);

module.exports = router;
