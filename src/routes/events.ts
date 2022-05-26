import express from "express";

const eventController = require("../controllers/eventcontroller");

const router = express.Router();

console.log(eventController.getEventById)

router.get("/", eventController.getAllEvents);
router.get("/:id", eventController.getEventById);
// router.get("/:name", eventController.getByEventName);
router.post("/", eventController.saveEvent);
router.put("/:id", eventController.saveEvent);
router.delete("/:id", eventController.deleteEvent);

module.exports = router;
