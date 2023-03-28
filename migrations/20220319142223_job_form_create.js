/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("job_form_create", function(table){
        table.increments("jobapplicationid").primary()
        table.integer("seeker_id");
        table.foreign("seeker_id").references("seeker.seeker_id");
        table.integer("job_id").notNullable().unique().unsigned();;
        table.foreign("job_id").references("job.job_id");
        table.string("question1");
        table.string("question2");
        table.string("question3");
        table.string("question4");
        table.string("question5");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("job_form_create");
};
