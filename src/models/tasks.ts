export {};

let knex = require("../knex");

const tasksTable = "tasks";

const getAllTasks = () => {
  return knex
    .select({
      id: "id",
      description: "description",
      status: "status",
      points: "points",
      event_id: "event_id",
      user_id: "user_id",
      cost: "cost",
      created_at: "created_at",
      updated_at: "updated_at",
    })
    .from(tasksTable);
};

const getTaskById = (id: Number) => {
  return knex
    .select({
      id: "id",
      description: "description",
      status: "status",
      points: "points",
      event: "event_id",
      users: "user_id",
      cost: "cost",
      created_at: "created_at",
      updated_at: "updated_at",
    })
    .from(tasksTable)
    .where({ id: id })
    .first();
};

const getByTaskName = (taskname: String) => {
  return knex
    .select({
      id: "id",
      description: "description",
      status: "status",
      points: "points",
      event: "event_id",
      users: "user_id",
      cost: "cost",
      created_at: "created_at",
      updated_at: "updated_at",
    })
    .from(tasksTable)
    .where({ name: taskname })
    .first();
};

const createTask = (task: Object) => {
  return knex.insert(task).into("tasks").catch(console.error());
};

const updateTask = (id: Number, updatedInfo: Object) => {
  return knex("tasks")
    .update(updatedInfo)
    .where({ id: id })
    .catch(console.error());
};

const deleteTask = (id: Number) => {
  return knex
    .select({
      id: "id",
      description: "description",
      status: "status",
      points: "points",
      event: "event_id",
      users: "user_id",
      cost: "cost",
      created_at: "created_at",
      updated_at: "updated_at",
    })
    .from(tasksTable)
    .where({ id: id })
    .del();
};

module.exports = {
  getAllTasks,
  getTaskById,
  getByTaskName,
  createTask,
  updateTask,
  deleteTask,
};
