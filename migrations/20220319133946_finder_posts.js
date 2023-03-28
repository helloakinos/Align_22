/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("finder_posts", function(table){
        table.increments("post_id").notNullable().unique().unsigned().primary();
        table.string("post_content", 4000);
        table.integer("finder_id");
        table.foreign("finder_id").references("finder.finder_id");
        table.integer("likes");
        table.integer("dislikes");
        table.string("comments", 1000);
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("finder_posts");
};
