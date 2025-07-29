const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const auth = require("../middleware/auth-middleware");
const allow = require("../middleware/role-middleware");

router.get("/", auth, allow("admin"), userController.getAllUsers);
router.post("/", auth, allow("admin"), userController.createUser);
router.put("/:id", auth, allow("admin"), userController.updateUser);
router.delete("/:id", auth, allow("admin"), userController.deleteUser);

module.exports = router;
