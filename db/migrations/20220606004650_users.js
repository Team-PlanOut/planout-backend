/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function (knex) {
    await knex.schema.createTable('users', (table) => {
      table.string('id').primary().unique();
      table.string('email').unique().notNullable();
      table.string('username').unique();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.integer('points');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function (knex) {
    await knex.schema.dropTable('users');
  };
  