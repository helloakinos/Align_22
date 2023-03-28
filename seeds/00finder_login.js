/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("finder_login").del();
  await knex("finder_login").insert([
    { finder_name: "ini", hash: "123" },
    { finder_name: "mini" },
    { finder_name: "mainy" },
  ]);
};
