/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tasks').del();
  await knex('tasks').insert([
    {
      description: 'buy the BOOZE yo!',
      status: 'false',
      points: 100,
      event_id: 1,
      user_id: 1,
      cost: 50000,
    },
    {
      description: 'Arrange the funeral',
      status: 'false',
      points: 100,
      event_id: 2,
      user_id: 2,
      cost: 5,
    },
    {
      description: 'Prepare for the reckoning',
      status: 'false',
      points: 500,
      event_id: 3,
      user_id: 3,
    },
  ]);
};
