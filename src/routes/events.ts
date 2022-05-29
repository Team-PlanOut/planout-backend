import express from "express";

import eventController from "../controllers/eventcontroller";

const router = express.Router();

router.get("/", eventController.getAllEvents);
router.get("/:id", eventController.getEventById);
router.get("/:name", eventController.getEventByName);
router.get("/host/:id", eventController.getEventByHost); //events/host/:id
router.post("/", eventController.saveEvent);
router.put("/:id", eventController.saveEvent);
router.delete("/:id", eventController.deleteEvent);

export default router;
