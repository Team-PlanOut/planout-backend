import express from "express";

const eventUserController = require("../controllers/event_usercontroller");

const router = express.Router();

router.get("/", eventUserController.getAll);
router.get("/:id", eventUserController.getByEventId); //
router.get("/:id", eventUserController.getByUserId); // need to split these
router.post("/", eventUserController.saveUserEvent);
router.put("/:id", eventUserController.saveUserEvent);
router.delete("/:id", eventUserController.deleteUserEvent);

module.exports = router;