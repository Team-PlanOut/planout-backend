/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('friends').del();
    await knex('friends').insert([
      { id: 1, user1_id: 1, user2_id: 2 },
      { id: 2, user1_id: 1, user2_id: 1 },
      { id: 3, user1_id: 1, user2_id: 3 },
      { id: 4, user1_id: 2, user2_id: 1 },
      { id: 5, user1_id: 2, user2_id: 2 },
      { id: 6, user1_id: 3, user2_id: 3 },
      { id: 7, user1_id: 3, user2_id: 3 },
      { id: 8, user1_id: 3, user2_id: 2 },
      { id: 9, user1_id: 3, user2_id: 1 },
    ]);
  };
  