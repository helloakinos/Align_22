/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("seeker_cv", function(table){
        table.integer("cv_id").notNullable().unique().unsigned().primary();
        table.foreign("cv_id").references("seeker.cv_id")
        table.date("date_created");
        table.date("date_updated");
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("seeker_cv");
};
