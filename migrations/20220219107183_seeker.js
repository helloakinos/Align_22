/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("seeker", function (table) {
    table.integer("seeker_id").notNullable().unique();
    table.foreign("seeker_id").references("seeker_login.seeker_id");
    table.string("first_name").notNullable();
    table.string("surname").notNullable();
    table.string("current_company");
    table.date("date_joined");
    table.string("gender");
    table.integer("cv_id").unique();
    table.string("favourite_finders");
    table.string("favourite_jobs");
    table.string("current_location");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("seeker");
};
