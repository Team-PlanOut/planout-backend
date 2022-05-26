const taskModel = require("../models/tasks");
import { Request, Response } from "express";

module.exports = {
  async getAllTasks(req: Request, res: Response) {
    const allTasks = await taskModel.getAllTasks();
    res.send(allTasks);
  },

  async getTasksById(req: Request, res: Response) {
    const id = req.params.id;
    const specifiedTask = await taskModel.getTaskById(id);
    res.send(specifiedTask);
  },

  async getTaskbyName(req: Request, res: Response) {
    const taskName = req.params.name;
    const task = await taskModel.getByTaskName(taskName);
    res.send(task);
  },

  async saveTask(req: Request, res: Response) {
    const {
      id,
      description,
      status,
      points,
      event_id,
      user_id,
      cost,
      created_at,
      updated_at,
    } = req.body;

    const taskObj = {
      id: id,
      description: description,
      status: status,
      points: points,
      event_id: event_id,
      user_id: user_id,
      cost: cost,
      created_at: created_at,
      updated_at: updated_at,
    };
    if (id) {
      await taskModel.updateTask(id, taskObj);
    } else {
      await taskModel.createTask(taskObj);
    }
    res.status(200).send(taskObj)
  },

  async deleteTask(req: Request, res: Response) {
    const id = req.params.id;
    await taskModel.deleteTask(id);
    res.status(200);
  },
};
