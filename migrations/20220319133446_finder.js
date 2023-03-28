/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("finder", function (table) {
    table.integer("finder_id").unique().unsigned().primary();
    table.foreign("finder_id").references("finder_login.finder_id");
    table.string("finder_name").unique();
    table.boolean("vetted");
    table.string("finder_description");
    table.integer("finder_size");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("finder");
};
