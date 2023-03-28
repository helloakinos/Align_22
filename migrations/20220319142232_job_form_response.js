/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable("job_form_response", function(table){
        table.integer("job_id").notNullable().unique().unsigned();;
        // table.foreign("job_id").references("job.job_id");
        table.integer("seeker_id").notNullable().unique().unsigned();
        table.foreign("seeker_id").references("seeker.seeker_id");
        table.primary(["job_id", "seeker_id"]);
        table.string("response1", 3000);
        table.string("response2", 3000);
        table.string("response3", 3000);
        table.string("response4", 3000);
        table.string("response5", 3000);
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("job_form_response");
};
