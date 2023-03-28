/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("finder").del();
  await knex("finder").insert([
    {
      finder_id: 1,
      finder_name: "Microsoft",
      vetted: true,
      finder_description: "Technology to change and improve lives",
      finder_size: 3,
    },
    {
      finder_id: 2,
      finder_name: "poorhelp",
      vetted: true,
      finder_description: "This project aims to help the poor",
      finder_size: 5,
    },
    {
      finder_id: 3,
      finder_name: "animalsinneed",
      vetted: true,
      finder_description: "This project aims to help animals in need",
      finder_size: 20,
    },
  ]);
};
