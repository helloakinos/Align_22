/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("job_connects", function (table) {
    table.increments("connect_id");
    table.integer("job_id").unsigned();
    table.foreign("job_id").references("job.job_id");
    table.integer("seeker_id").unique();
    table.foreign("seeker_id").references("seeker.seeker_id");
    table.string("seeker_first_name");
    table.string("seeker_surname");
    table.date("date_connected");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("job_connects");
};
