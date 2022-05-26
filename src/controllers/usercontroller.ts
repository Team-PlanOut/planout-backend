const userModel = require("../models/users");
import { Request, Response } from "express";

module.exports = {
  async getAllUsers(req: Request, res: Response) {
    const allUsers = await userModel.getAllUsers();
    res.send(allUsers);
  },

  async getUsersById(req: Request, res: Response) {
    const id = req.params.id;
    const specifiedUser = await userModel.getUsersById(id);
    res.send(specifiedUser);
  },

  async getUsersByUserName(req: Request, res: Response) {
    const userName = req.params.name;
    const user = await userModel.getUsersByUserName(userName);
    res.send(user);
  },

  async saveUser(req: Request, res: Response) {
    const { id, email, first_name, last_name, points, created_at, updated_at } =
      req.body;

    const userObj = {
      id: id,
      email: email,
      first_name: first_name,
      last_name: last_name,
      points: points,
      created_at: created_at,
      updated_at: updated_at,
    };
    if (id) {
      await userModel.updateUser(id, userObj);
    } else {
      await userModel.createUser(userObj);
    }
  },

  async deleteUser(req: Request, res: Response) {
    const id = req.params.id;
    await userModel.deleteUser(id);
  },
};
