/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("seeker_login", function (table) {
    table.increments("seeker_id").primary();
    table.string("seeker_name").unique();
    table.string("access_token");
    table.integer("session_id");
    table.string("email").unique();
    table.string("hash");
    table.string("facebook_id").unique();
    table.string("gmail_id").unique();
    table.string("microsoft_id").unique();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("seeker_login");
};
