/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("seeker_customfield", function (table) {
    table.increments("customfield_id").notNullable().primary();
    table.integer("seeker_id");
    table.foreign("seeker_id").references("seeker.seeker_id");
    table.string("customfield_title");
    table.string("customfield_content", 2000);
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("seeker_customfield");
};
