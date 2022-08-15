export {};
let knex = require("../knex");

const usersEventsTable = "users_events";

const getAll = () => {
  return knex
    .select({
      event_id: "event_id",
      user_id: "user_id",
    })
    .from(usersEventsTable);
};

const getByEventId = (id: Number) => {
  return knex("users_events")
    .join("users", "users_events.user_id", "=", "users.id")
    .join("events", "users_events.event_id", "=", "events.id")
    .select({
      eventId: "events.id",
      eventName: "events.event_name",
      id: "users.id",
      email: "users.email",
      firstName: "users.first_name",
      lastName: "users.last_name",
      photoUrl: "users.photoUrl",
      points: "users.points",
      createdAt: "users.created_at",
      updatedAt: "users.updated_at",
    })
    .where("users_events.event_id", id);
};

const getByUserId = (id: Number) => {
  return knex("users_events")
    .join("users", "users_events.user_id", "=", "users.id")
    .join("events", "users_events.event_id", "=", "events.id")
    .select({
      eventId: "events.id",
      eventName: "events.event_name",
      id: "users.id",
      email: "users.email",
      firstName: "users.first_name",
      lastName: "users.last_name",
      photoUrl: "users.photoUrl",
      points: "users.points",
      createdAt: "users.created_at",
      updatedAt: "users.updated_at",
    })
    .where("users_events.user_id", id);
};

const createEventUser = (eventUser: Object) => {
  return knex.insert(eventUser).into(usersEventsTable).catch(console.error);
};

const updateEventUser = (id: Number, updatedInfo: Object) => {
  return knex(usersEventsTable)
    .update(updatedInfo)
    .where({ id: id })
    .catch(console.error);
};

const deleteEventUser = (id: Number) => {
  return knex(usersEventsTable).where({ id: id }).del();
};

module.exports = {
  getAll,
  getByEventId,
  getByUserId,
  createEventUser,
  updateEventUser,
  deleteEventUser,
};
