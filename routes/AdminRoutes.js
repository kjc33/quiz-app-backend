const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");
const { authenticateJWT } = require("../middlewares/AuthMiddleware");

router.post("/admin/register", AdminController.registerAdmin);
router.post("/admin/login", AdminController.loginAdmin);
router.get("/admin/verifyToken", authenticateJWT, AdminController.verifyToken);

module.exports = router;
