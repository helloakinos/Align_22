/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("correspondence", function(table){
        table.increments("message_id").primary();
        table.integer("seeker_id").notNullable().unsigned();
        table.foreign("seeker_id").references("seeker.seeker_id");
        table.date("date_sent");
        table.time("time_sent");
        table.integer("finder_id");
        table.foreign("finder_id").references("finder.finder_id");
        table.string("message_content");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("correspondence");
};
