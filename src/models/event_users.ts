export {};
let knex = require('../knex');

const usersEventsTable = 'users_events';

const getAll = () => {
  return knex
    .select({
      event_id: 'event_id',
      user_id: 'user_id',
    })
    .from(usersEventsTable);
};

const getByEventId = (eventId: Number) => {
  return knex
    .select({
      event_id: 'event_id',
      user_id: 'user_id',
    })
    .from(usersEventsTable)
    .where(eventId, 'event_id');
};

const getByUserId = (userId: Number) => {
  return knex
    .select({
      event_id: 'event_id',
      user_id: 'user_id',
    })
    .from(usersEventsTable)
    .where(userId, 'user_id');
};

const createEventUser = (eventUser: Object) => {
  return knex.insert(eventUser).into(usersEventsTable).catch(console.error());
};

const updateEventUser = (id: Number, updatedInfo: Object) => {
  return knex(usersEventsTable)
    .update(updatedInfo)
    .where({ id: id })
    .catch(console.error());
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
