

const eventsTable = "Events";

const getAllEvents = () => {
    return knex
    .select({
        id: "id",
        name: "event_name",
        date: "date",
        budget: "budget",
        members: "members",
        host: "host"
    })
    .from(eventsTable)
};

const getEventById = (id: Number) => {
    return knex
    .select({
        id: "id",
        name: "event_name",
        date: "date",
        budget: "budget",
        members: "members",
        host: "host"
    })
    .from(eventsTable)
    .where({id: id})
    .first()
};

const getByEventName = (eventname: String) => {
    return knex
    .select({
        id: "id",
        name: "event_name",
        date: "date",
        budget: "budget",
        members: "members",
        host: "host"
    })
    .from(eventsTable)
    .where({name: eventname})
    .first()
};

const createEvent = (event: Object) => {
    return knex.insert(event).into("Events").catch(console.error());
};

const updateEvent = (id: Number, updatedInfo: Object) => {
    return knex("Events")
    .update(updatedInfo)
    .where({"id": id})
    .catch(console.error())
};

const deleteEvent = (id: Number) => {
    return knex
    .select({
        id: "id",
        name: "event_name",
        date: "date",
        budget: "budget",
        members: "members",
        host: "host"
    })
    .from(eventsTable)
    .where({id: id})
    .del()
};

module.exports = {getAllEvents, getEventById, getByEventName, createUser, updateUser, deleteUser};