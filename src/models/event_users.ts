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

// const getByEventId = (eventId: Number) => {
//   return knex
//     .select({
//       event_id: 'event_id',
//       user_id: 'user_id',
//     })
//     .from(usersEventsTable)
//     .where(eventId, 'event_id');
// };

const getByEventId = (eventId: Number) => {
  return knex(usersEventsTable)
    .join('users', 'users_events.user_id', '=', 'users.id')
    .join('events', 'events.id', '=', 'users_events.event_id')
    .select({
      eventId: 'events.id',
      // eventName: 'events.event_name',
      // id: 'users.id',
      // email: 'users.email',
      // firstName: 'users.first_name',
      // lastName: 'users.last_name',
      // points: 'users.points',
      // createdAt: 'users.created_at',
      // updatedAt: 'users.updated_at',
    })
    .where('users_events.event_id', eventId);
};

// const getTasksByEventId = (id: Number) => {
//   return knex(tasksTable)
//   .join('users', 'tasks.user_id', '=', 'users.id')
//   .join('events', 'events.id', '=', 'tasks.event_id')
//   .select({
//     id: 'tasks.id',
//     description: 'tasks.description',
//     status: 'tasks.status',
//     points: 'tasks.points',
//     eventId: 'tasks.event_id',
//     userId: 'users.id',
//     userFirstName: 'users.first_name',
//     userLastName: 'users.last_name',
//     cost: 'tasks.cost',
//     createdAt: 'tasks.created_at',
//     updatedAt: 'tasks.updated_at',
//   })
//     .where("tasks.event_id", id)
// };

// {
//   "event_id": null,
//   "user_id": null
// }

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
  createEventUser,
  updateEventUser,
  deleteEventUser,
};
