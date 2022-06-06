import express from "express";

const friendController = require("../controllers/friendscontroller");

const router = express.Router();

router.get("/", friendController.getAllFriends);
router.post("/", friendController.saveFriendship);
router.delete("/:id", friendController.deleteFriend);

module.exports = router;