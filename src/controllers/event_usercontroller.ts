const userEventModel = require("../models/event_users");
import { Request, Response } from "express";

module.exports = {
  async getAll(req: Request, res: Response) {
    const allUsersEvents = await userEventModel.getAll();
    res.send(allUsersEvents);
  },

  async getByEventId(req: Request, res: Response) {
    const id = req.params.id;
    const specifiedEvent = await userEventModel.getByEventId(id);
    res.send(specifiedEvent);
  },

  async getByUserId(req: Request, res: Response) {
    const id = req.params.id;
    const specifiedEvent = await userEventModel.getByUserId(id);
    res.send(specifiedEvent);
  },

  async saveUserEvent(req: Request, res: Response) {
    const { id, event_id, user_id, created_at, updated_at } =
      req.body;

    const eventObj = {
      id: id,
      event_id: event_id,
      user_id: user_id,
      created_at: created_at,
      updated_at: updated_at,
    };
    if (id) {
      await userEventModel.updateEventUser(id, eventObj);
    } else {
      await userEventModel.createEventUser(eventObj);
    }
    res.status(200).send(eventObj);
  },

  async deleteUserEvent(req: Request, res: Response) {
    const id = req.params.id;
    await userEventModel.deleteEventUser(id);
    res.status(200).send();
  },
};