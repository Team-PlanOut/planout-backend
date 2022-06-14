import express from "express";

const taskController = require("../controllers/taskcontroller");

const router = express.Router();

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTasksById);
router.get("/event/:id", taskController.getTasksByEventId);//tasks/event/1
router.get("/user/:id", taskController.getTasksByUserId);//tasks/user/1
router.post("/", taskController.saveTask);
router.put("/:id", taskController.saveTask);
router.delete("/:id", taskController.deleteTask);  

module.exports = router;  