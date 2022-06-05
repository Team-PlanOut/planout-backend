import { Request, Response } from "express";
const friendsModel = require("../models/friends")

module.exports = {
    async getAllFriends  (req: Request, res: Response) {
    const allFriends = await friendsModel.getAllFriends()
    res.send(allFriends);
},
async getFriendsByUserId  (req: Request, res: Response){
    const id = req.params.id;
    const myFriends = await friendsModel.getFriendsByUserId(id);
    res.send(myFriends);
},
async saveFriendship(req: Request, res: Response) {
    const {user1_id, user2_id} =req.body;

},

async deleteFriendship  (req: Request, res: Response) {
    const id = req.params.id;
    await friendsModel.deleteTask(id);
}
}



