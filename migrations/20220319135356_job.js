/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("job", function (table) {
    table.increments("job_id").unique;
    table.integer("finder_id");
    table.foreign("finder_id").references("finder.finder_id");
    table.string("job_title");
    table.string("job_description", 9000);
    table.string("location");
    table.boolean("vetted");
    table.integer("number_of_seekers");
    table.integer("min_salary");
    table.integer("max_salary");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("job");
};
