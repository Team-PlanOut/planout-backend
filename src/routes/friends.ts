import express from "express";

const friendController = require("../controllers/friendscontroller");

const router = express.Router();

router.get("/:id", friendController.getAllFriends);
router.post("/:userid/:friendid", friendController.saveFriendship);
router.delete("/:userid/:friendid", friendController.friendshipEnded);

module.exports = router;