import express from "express";

import taskController from "../controllers/taskcontroller";

const router = express.Router();

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTasksById);
router.get("/event/:id", taskController.getTasksByEvent); //tasks/event/1
router.get("/user/:id", taskController.getTasksByEvent); //tasks/user/1
router.post("/", taskController.saveTask);
router.put("/:id", taskController.saveTask);
router.delete("/:id", taskController.deleteTask);



export default router;

