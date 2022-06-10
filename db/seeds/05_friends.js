/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('friends').del();
    await knex('friends').insert([
      { id: 1, user1_id: "1a9d53c2", user2_id: "280f425a" },
      { id: 2, user1_id: "1a9d53c2", user2_id: "320b4650" },
      { id: 3, user1_id: "280f425a", user2_id: "1a9d53c2" },
      { id: 4, user1_id: "280f425a", user2_id: "320b4650" },
      { id: 5, user1_id: "320b4650", user2_id: "280f425a" },
      { id: 6, user1_id: "320b4650", user2_id: "1a9d53c2" },
    ]);
  };
  