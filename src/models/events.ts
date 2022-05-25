

const eventsTable = "events";

const getAllEvents = () => {
    return knex
    .select({
        id: "eventId",
        name: "eventName",
        date: "date",
        budget: "budget",
        users: ("users"),
        host: "hostID"
    })
    .from(eventsTable)
};

const getEventById = (id: Number) => {
    return knex
    .select({
        id: "eventId",
        name: "eventName",
        date: "date",
        budget: "budget",
        users: ("users"),
        host: "hostID"
    })
    .from(eventsTable)
    .where({id: id})
    .first()
};

const getByEventName = (eventname: String) => {
    return knex
    .select({
        id: "eventId",
        name: "eventName",
        date: "date",
        budget: "budget",
        users: ("users"),
        host: "hostID"
    })
    .from(eventsTable)
    .where({name: eventname})
    .first()
};

const createEvent = (event: Object) => {
    return knex.insert(event).into("events").catch(console.error());
};

const updateEvent = (id: Number, updatedInfo: Object) => {
    return knex("events")
    .update(updatedInfo)
    .where({"id": id})
    .catch(console.error())
};

const deleteEvent = (id: Number) => {
    return knex
    .select({
        id: "userId",
        name: "name",
        points: "points"
    })
    .from(eventsTable)
    .where({id: id})
    .del()
};

module.exports = {getAllEvents, getEventById, getByEventName, createUser, updateUser, deleteUser};