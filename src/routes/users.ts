import express from "express";

const userController = require("../controllers/usercontroller");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUsersById);
router.get("/:name", userController.getUsersByUserName);
router.post("/", userController.saveUser);
router.put("/:id", userController.saveUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
