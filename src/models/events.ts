export { };
let knex = require("../knex");

const eventsTable = "events";
const usersTable = "users";

const getAllEvents = () => {
  return knex("events").join("users", "events.host", "=", "users.id").select({
    id: "events.id",
    name: "events.event_name",
    date: "events.date",
    budget: "events.budget",
    hostId: "users.id",
    hostPhoto: "users.photoUrl",
    hostFirstName: "users.first_name",
    hostLastName: "users.last_name",
    created_at: "events.created_at",
    updated_at: "events.updated_at",
  });
};

const getEventById = (id: Number) => {
  return (
    knex("events")
      .join("users", "events.host", "=", "users.id")
      .select({
        id: "events.id",
        name: "events.event_name",
        date: "events.date",
        budget: "events.budget",
        hostId: "users.id",
        hostPhoto: "users.photoUrl",
        hostFirstName: "users.first_name",
        hostLastName: "users.last_name",
        created_at: "events.created_at",
        updated_at: "events.updated_at",
      })
      // .from(eventsTable)
      .where("events.id", id)
      .first()
  );
};

const getByEventName = (eventName: String) => {
  return knex("events")
    .join("users", "events.host", "=", "users.id")
    .select({
      id: "events.id",
      name: "events.event_name",
      date: "events.date",
      budget: "events.budget",
      hostId: "users.id",
      hostPhoto: "users.photoUrl",
      hostFirstName: "users.first_name",
      hostLastName: "users.last_name",
      created_at: "events.created_at",
      updated_at: "events.updated_at",
    })
    .where("events.name", eventName)
    .first();
};

const getByHostId = (host: Number) => {
  return knex("events")
    .join("users", "events.host", "=", "users.id")
    .select({
      id: "events.id",
      name: "events.event_name",
      date: "events.date",
      budget: "events.budget",
      hostId: "users.id",
      hostPhoto: "users.photoUrl",
      hostFirstName: "users.first_name",
      hostLastName: "users.last_name",
      created_at: "events.created_at",
      updated_at: "events.updated_at",
    })
    .where("events.host", host)
    .first();
};


const createEvent = (event: Object) => {
  return knex.insert(event).into("events").catch(console.error);
};

const updateEvent = (id: Number, updatedInfo: Object) => {
  return knex("events")
    .update(updatedInfo)
    .where({ id: id })
    .catch(console.error);
};

const deleteEvent = (id: Number) => {

  return (
    knex("events")
      .where("id", id)
      .del()
  );
};

module.exports = {
  getAllEvents,
  getEventById,
  getByEventName,
  getByHostId,
  createEvent,
  updateEvent,
  deleteEvent,
};
