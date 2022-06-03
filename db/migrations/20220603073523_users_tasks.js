/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function (knex) {
    await knex.schema.createTable("users_tasks", (table) => {
      table.increments("id").primary();
      table.integer("user_id").references("id").inTable("users").onDelete('CASCADE');
      table.integer("task_id").references("id").inTable("tasks").onDelete('CASCADE');
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function (knex) {
    await knex.schema.dropTable("users_tasks");
  };