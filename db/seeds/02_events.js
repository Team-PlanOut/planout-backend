/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('events').del()
  await knex('events').insert([
    {id:1, host: 1, event_name: "Ruprecht's Birthday", date: "2022-06-23T18:25:43.511Z", budget: 1000000 },
    {id:2, host: 2, event_name: "Ruprecht's Funeral", date: "2022-06-24T18:25:43.511Z", budget: 15 },
    {id:3, host: 3, event_name: "Day of Judgement", date: "2026-06-06T18:25:43.511Z", budget: 666 },
  ]);
};
