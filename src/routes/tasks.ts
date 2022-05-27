import express from "express";

const taskController = require("../controllers/taskcontroller");

const router = express.Router();

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTasksById);
router.get("/event/:id", taskController.getTasksByEvent);
router.post("/", taskController.saveTask);
router.put("/:id", taskController.saveTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;