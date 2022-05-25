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
    table.foreign("event_id", ["events.id"]);
    table.foreign("user_id", ["users.id"]);
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
