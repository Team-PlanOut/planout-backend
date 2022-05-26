/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary();
    table.string("description").notNullable();
    table.boolean("status").notNullable();
    table.integer("points");
    table.integer("event_id").references("id").inTable("events");
    table.integer("user_id").references("id").inTable("users");
    table.integer("cost");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable("tasks");
};
