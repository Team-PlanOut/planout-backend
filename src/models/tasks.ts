export {};

let knex = require("../knex");

const tasksTable = "tasks";

const getAllTasks = () => {
  return knex(tasksTable)
    .join("users", "tasks.user_id", "=", "users.id")
    .join("events", "events.id", "=", "tasks.event_id")
    .select({
      id: "tasks.id",
      description: "tasks.description",
      status: "tasks.status",
      points: "tasks.points",
      eventId: "tasks.event_id",
      userId: "users.id",
      userFirstName: "users.first_name",
      userLastName: "users.last_name",
      cost: "tasks.cost",
      createdAt: "tasks.created_at",
      updatedAt: "tasks.updated_at",
    });
  // .from(tasksTable);
};

const getTaskById = (id: Number) => {
  return knex(tasksTable)
    .join("users", "tasks.user_id", "=", "users.id")
    .join("events", "events.id", "=", "tasks.event_id")
    .select({
      id: "tasks.id",
      description: "tasks.description",
      status: "tasks.status",
      points: "tasks.points",
      eventId: "tasks.event_id",
      userId: "users.id",
      userFirstName: "users.first_name",
      userLastName: "users.last_name",
      cost: "tasks.cost",
      createdAt: "tasks.created_at",
      updatedAt: "tasks.updated_at",
    })
    .where("tasks.id", id)
    .first();
};

const getTasksByEventId = (id: Number) => {
  return knex(tasksTable)
    .join("users", "tasks.user_id", "=", "users.id")
    .join("events", "events.id", "=", "tasks.event_id")
    .select({
      id: "tasks.id",
      description: "tasks.description",
      status: "tasks.status",
      points: "tasks.points",
      eventId: "tasks.event_id",
      userId: "users.id",
      userFirstName: "users.first_name",
      userLastName: "users.last_name",
      cost: "tasks.cost",
      createdAt: "tasks.created_at",
      updatedAt: "tasks.updated_at",
    })
    .where("tasks.event_id", id);
};

const getTasksByUserId = (id: String) => {
  return knex(tasksTable)
    .join("users", "tasks.user_id", "=", "users.id")
    .join("events", "events.id", "=", "tasks.event_id")
    .select({
      id: "tasks.id",
      description: "tasks.description",
      status: "tasks.status",
      points: "tasks.points",
      eventId: "tasks.event_id",
      eventName: "events.event_name",
      userId: "users.id",
      userFirstName: "users.first_name",
      userLastName: "users.last_name",
      cost: "tasks.cost",
      createdAt: "tasks.created_at",
      updatedAt: "tasks.updated_at",
    })
    .where("tasks.user_id", id);
  // .first();
};

const getByTaskName = (taskname: String) => {
  return knex(tasksTable)
    .join("users", "tasks.user_id", "=", "users.id")
    .join("events", "events.id", "=", "tasks.event_id")
    .select({
      id: "tasks.id",
      description: "tasks.description",
      status: "tasks.status",
      points: "tasks.points",
      eventId: "tasks.event_id",
      userId: "users.id",
      userFirstName: "users.first_name",
      userLastName: "users.last_name",
      cost: "tasks.cost",
      createdAt: "tasks.created_at",
      updatedAt: "tasks.updated_at",
    })
    .where("tasks.description", taskname) 
    .first();
};

const createTask = (task: Object) => {
  return knex.insert(task).into("tasks").catch(console.error());
};

const updateTask = (id: Number, updatedInfo: Object) => {
  return knex("tasks").update(updatedInfo).where("id", id).catch(console.error);
};

const updateTaskUser = (id: Number, updatedInfo: Object) => {
  return knex("users_tasks")
    .update(updatedInfo)
    .where({ id: id })
    .catch(console.error);
};

const deleteTask = (id: Number) => {
  return knex(tasksTable).select("*").where({ id: id }).del();
};

module.exports = {
  getAllTasks,
  getTaskById,
  getByTaskName,
  createTask,
  updateTask,
  deleteTask,
  getTasksByEventId,
  getTasksByUserId,
};
