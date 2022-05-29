import express from "express";

import eventUserController from "../controllers/event_usercontroller";

const router = express.Router();

router.get("/", eventUserController.getAll);
router.get("/users/:event_id", eventUserController.getUsersByEventId);
router.get("/:user_id/events", eventUserController.getByUserId);
router.post("/", eventUserController.saveUserEvent);
router.put("/:id", eventUserController.saveUserEvent);
router.delete("/:id", eventUserController.deleteUserEvent);

export default router;
