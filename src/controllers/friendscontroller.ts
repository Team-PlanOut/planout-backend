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
async saveFriend(req: Request, res: Response) {

},

async deleteFriendship  (req: Request, res: Response) {
    const id = req.params.id;
    await friendsModel.deleteTask(id);
}
}



