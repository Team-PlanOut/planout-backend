const eventModel = require("../models/events");
import { Request, Response } from "express";

module.exports = {
  async getAllEvents(req: Request, res: Response) {
    const allEvents = await eventModel.getAllEvents();
    res.send(allEvents);
  },

  async getEventById(req: Request, res: Response) {
    const id = req.params.id;
    const specifiedEvent = await eventModel.getEventById(id);
    res.send(specifiedEvent);
  },

  async getEventByName(req: Request, res: Response) {
    const eventName = req.params.name;
    const event = await eventModel.getEventByName(eventName);
    res.send(event);
  },

  async saveEvent(req: Request, res: Response) {
    const { id, name, date, budget, members, host, created_at, updated_at } =
      req.body;

    const eventObj = {
      id: id,
      name: name,
      date: date,
      budget: budget,
      members: members,
      host: host,
      created_at: created_at,
      updated_at: updated_at,
    };
    if (id) {
      await eventModel.updateEvent(id, eventObj);
    } else {
      await eventModel.createEvent(eventObj);
    }
  },

  async deleteEvent(req: Request, res: Response) {
    const id = req.params.id;
    await eventModel.deleteEvent(id);
  },
};
