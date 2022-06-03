/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function (knex) {
    await knex.schema.createTable("friends", (table) => {
      table.increments("id").primary();
      table.integer("user1_id").references("id").inTable("users").onDelete('CASCADE');
      table.integer("user2_id").references("id").inTable("users").onDelete('CASCADE');
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function (knex) {
    await knex.schema.dropTable("friends");
  };
  