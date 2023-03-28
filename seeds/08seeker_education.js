/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("seeker_education").del();
  await knex("seeker_education").insert([
    {
      seeker_id: 1,
      university_degree: true,
      highschool_degree: true,
      other_certifications: "Black Smith Apprentice & Driving License",
    },
    {
      seeker_id: 2,
      university_degree: false,
      highschool_degree: true,
      other_certifications: "Black Smith Apprentice & Driving License",
    },
    {
      seeker_id: 3,
      university_degree: true,
      highschool_degree: true,
      other_certifications: "certified teacher",
    },
    {
      seeker_id: 4,
      university_degree: false,
      highschool_degree: true,
      other_certifications: "Black Smith Apprentice & Driving License",
    },
    {
      seeker_id: 5,
      university_degree: false,
      highschool_degree: false,
      other_certifications: "Black Smith Apprentice & Driving License",
    },
    {
      seeker_id: 6,
      university_degree: true,
      highschool_degree: true,
      other_certifications: "PT licenses",
    },
    {
      seeker_id: 7,
      university_degree: true,
      highschool_degree: true,
      other_certifications: "Black Smith Apprentice & Driving License",
    },
    {
      seeker_id: 8,
      university_degree: true,
      highschool_degree: true,
      other_certifications: "Black Smith Apprentice & Driving License",
    },
    {
      seeker_id: 9,
      university_degree: false,
      highschool_degree: true,
      other_certifications: "Trading license HK stockexchange",
    },
    {
      seeker_id: 10,
      university_degree: true,
      highschool_degree: true,
      other_certifications: "Black Smith Apprentice & Driving License",
    },
    {
      seeker_id: 11,
      university_degree: true,
      highschool_degree: true,
      other_certifications: "Black Smith Apprentice & Driving License",
    },
    {
      seeker_id: 12,
      university_degree: true,
      highschool_degree: true,
      other_certifications: "Black Smith Apprentice & Driving License",
    },
  ]);
};
