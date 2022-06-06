import { Request, Response } from "express";
const friendsModel = require("../models/friends");

module.exports = {
  async getAllFriends(req: Request, res: Response) {
    const id = req.params.id;
    const allFriends = await friendsModel.getAllFriends(id);
    res.send(allFriends);
  },

  async saveFriendship(req: Request, res: Response) {
    const userId = req.params.userid;
    const friendId = req.params.friendid;
    const friendship = { user1_id: userId, user2_id: friendId }
    const reverseFriendship = { user2_id: userId, user1_id: friendId }
    await friendsModel.addFriend(friendship);
    await friendsModel.addFriend(reverseFriendship);
    res.status(200);
  },

  async friendshipEnded(req: Request, res: Response) {
    const userId = req.params.userid;
    const friendId = req.params.friendid;
    await friendsModel.endFriendship(userId, friendId);
    await friendsModel.endFriendship(friendId, userId);
    ;
    res.status(200).send("Friendship ended with Mudasir, now Salman is my best friend");
  },
};
