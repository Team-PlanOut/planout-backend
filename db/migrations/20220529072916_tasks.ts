import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary();
    table.string("description").notNullable();
    table.boolean("status").notNullable();
    table.integer("points");
    table
      .integer("event_id")
      .references("id")
      .inTable("events")
      .onDelete("CASCADE");
    table.integer("user_id").references("id").inTable("users");
    table.integer("cost");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("tasks");
}
