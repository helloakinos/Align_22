/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("job").del();
  await knex("job").insert([
    {
      finder_id: 1,
      job_title: "Community Manager",
      job_description:
        "As a Community Manager, you will help create and manage our brand voice and image. Your duties include creating and publishing content on all media platforms, reviewing social media and other marketing metrics to build and improve campaign strategies and crafting responses to customers' feedback and messages on various platforms.",
      location: "HK",
    },
    {
      finder_id: 2,
      job_title: "Beach clean up",
      job_description:
        "Pick up trash and improve marine life. Free beer afterwards",
      location: "HK",
    },
    {
      finder_id: 3,
      job_title: "Volunteer Optician",
      job_description:
        "As a technical practitioner, you will design, fit and dispense lenses for the correction of clients' vision.",
      location: "HK",
    },
  ]);
};
