import express from "express";

const eventController = require("../controllers/eventcontroller");

const router = express.Router();

router.get("/", eventController.getAllEvents);
router.get("/:id", eventController.getEventById);
router.get("/:name", eventController.getEventByName);
router.get("/host/:id", eventController.getEventByHost);//events/host/:id
router.get("/tasks/:id", eventController.getEventByTaskId);
router.post("/", eventController.saveEvent);
router.put("/:id", eventController.saveEvent);
router.delete("/:id", eventController.deleteEvent);

module.exports = router;
