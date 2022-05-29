import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("events", (table) => {
    table.increments("id").primary();
    table.integer("host").references("id").inTable("users");
    table.string("event_name").notNullable();
    table.date("date").notNullable();
    table.integer("budget");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("events");
}
