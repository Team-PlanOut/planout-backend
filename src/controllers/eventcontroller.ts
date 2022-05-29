const eventModel = require("../models/events");
import { Request, Response } from "express";

export default {
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

  async getEventByHost(req: Request, res: Response) {
    const hostId = req.params.id;
    const event = await eventModel.getByHostId(hostId);
    res.send(event);
  },

  async saveEvent(req: Request, res: Response) {
    const { id, event_name, date, budget, host, created_at, updated_at } =
      req.body;

    const eventObj = {
      id: id,
      event_name: event_name,
      date: date,
      budget: budget,
      host: host,
      created_at: created_at,
      updated_at: updated_at,
    };
    if (id) {
      await eventModel.updateEvent(id, eventObj);
    } else {
      await eventModel.createEvent(eventObj);
    }
    res.status(200).send(eventObj);
  },

  async deleteEvent(req: Request, res: Response) {
    const id = req.params.id;
    await eventModel.deleteEvent(id);
    res.status(200).send();
  },
};
