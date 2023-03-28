/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("finder_contact", function (table) {
    table.increments("contact_id").notNullable().primary();
    table.integer("finder_id");
    table.foreign("finder_id").references("finder.finder_id");
    table.string("first_name");
    table.string("surname");
    table.integer("telephone_number").unique();
    table.integer("mobile_number").unique();
    table.string("email").unique();
    table.string("preferred_contact");
    table.string("role");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("finder_contact");
};
