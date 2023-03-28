/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("job_application", function(table){
        table.integer("job_id").unsigned();
        table.foreign("job_id").references("job.job_id");
        table.integer("seeker_id").unique();
        table.primary(["job_id", "seeker_id"]);
        table.foreign("seeker_id").references("seeker.seeker_id");
        table.integer("finder_id");
        table.foreign("finder_id").references("finder.finder_id");
        table.date("date_applied");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("job_application");
};
