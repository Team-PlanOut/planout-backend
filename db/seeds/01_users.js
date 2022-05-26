/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {first_name: 'Ruprecht', last_name: 'Epstein', points: 0, email: '1@ab.cd' },
    {first_name: 'Jeremy', last_name: 'Smith', points: 15, email: '2@ab.cd' },
    {first_name: 'Abbaddon', last_name: 'the Despoiler', points: 666, email: '3@ab.cd' }
  ]);
};
