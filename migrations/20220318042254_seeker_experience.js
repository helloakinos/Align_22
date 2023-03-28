/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("seeker_experience", function (table) {
    table.increments("experience_id").notNullable().unique().primary();
    table.integer("seeker_id").notNullable().unique().unsigned();
    table.foreign("seeker_id").references("seeker.seeker_id");
    table.string("experience", 5000);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("seeker_experience");
};
