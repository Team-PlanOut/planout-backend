import express from "express";

const eventUserController = require("../controllers/event_usercontroller");

const router = express.Router();

router.get("/", eventUserController.getAll);
router.get("/:event_id/users", eventUserController.getByEventId); 
router.get("/:user_id/events", eventUserController.getByUserId); 
router.post("/", eventUserController.saveUserEvent);
router.put("/:id", eventUserController.saveUserEvent);
router.delete("/:id", eventUserController.deleteUserEvent);

module.exports = router;