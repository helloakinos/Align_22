/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("seeker_contact", function (table) {
    table.integer("seeker_id").notNullable().unique().unsigned().primary();
    table.foreign("seeker_id").references("seeker.seeker_id");
    table.integer("mobile_number").unique().unsigned();
    table.integer("home_number").unique().unsigned();
    table.string("email1").notNullable().unique();
    table.string("email2");
    table.string("links");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("seeker_contact");
};
