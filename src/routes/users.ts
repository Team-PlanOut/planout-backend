import express from "express";

import userController from "../controllers/usercontroller";

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUsersById);
router.get("/:name", userController.getUsersByUserName);
router.post("/", userController.saveUser);
router.put("/:id", userController.saveUser);
router.delete("/:id", userController.deleteUser);

export default router;
