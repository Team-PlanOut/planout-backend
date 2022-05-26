export {};
let knex = require("../knex");

const eventsTable = "events";

const getAllEvents = () => {
  return knex
    .select({
      id: "id",
      name: "event_name",
      date: "date",
      budget: "budget",
      host: "host",
      created_at: "created_at",
      updated_at: "updated_at",
    })
    .from(eventsTable);
};

const getEventById = (id: Number) => {
  return knex
    .select({
      id: "id",
      name: "event_name",
      date: "date",
      budget: "budget",
      host: "host",
      created_at: "created_at",
      updated_at: "updated_at",
    })
    .from(eventsTable)
    .where({ id: id })
    .first();
};

const getByEventName = (eventName: String) => {
  return knex
    .select({
      id: "id",
      name: "event_name",
      date: "date",
      budget: "budget",
      host: "host",
      created_at: "created_at",
      updated_at: "updated_at",
    })
    .from(eventsTable)
    .where({ name: eventName })
    .first();
};

const createEvent = (event: Object) => {
  return knex.insert(event).into("events").catch(console.error());
};

const updateEvent = (id: Number, updatedInfo: Object) => {
  return knex("events")
    .update(updatedInfo)
    .where({ id: id })
    .catch(console.error());
};

const deleteEvent = (id: Number) => {
  return knex
    .select({
      id: "id",
      name: "event_name",
      date: "date",
      budget: "budget",
      host: "host",
      created_at: "created_at",
      updated_at: "updated_at",
    })
    .from(eventsTable)
    .where({ id: id })
    .del();
};

module.exports = {
  getAllEvents,
  getEventById,
  getByEventName,
  createEvent,
  updateEvent,
  deleteEvent,
};
