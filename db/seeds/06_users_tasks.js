/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("users_tasks").del();
    await knex("users_tasks").insert([
      { id: 1, task_id: 1, user_id: "1a9d53c2" },
      { id: 2, task_id: 2, user_id: "280f425a" },
      { id: 3, task_id: 3, user_id: "320b4650" },
    ]);
  };