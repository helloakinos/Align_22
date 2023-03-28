/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("seeker").del();
  await knex("seeker").insert([
    {
      seeker_id: 1,
      first_name: "Bella",
      surname: "Asturo",
      current_company: "Xccelerate",
      gender: "Female",
    },
    {
      seeker_id: 2,
      first_name: "Stella",
      surname: "Bernas",
      current_company: "philips",
      gender: "Female",
    },
    {
      seeker_id: 3,
      first_name: "christine",
      surname: "claption",
      current_company: "European Union",
      gender: "Prefer not to say",
    },
    {
      seeker_id: 4,
      first_name: "Dave",
      surname: "Doolitle",
      current_company: "Google",
      gender: "Male",
    },
    {
      seeker_id: 5,
      first_name: "Boris",
      surname: "Bruin",
      current_company: "Atlassian",
      gender: "Male",
    },
    {
      seeker_id: 6,
      first_name: "Yu Li",
      surname: "Mgoy",
      current_company: "SuperTech Ltd",
      gender: "Prefer not to say",
    },
    {
      seeker_id: 7,
      first_name: "Stephano",
      surname: "Align",
      current_company: "Mr Chickenfingers",
      gender: "Male",
    },
    {
      seeker_id: 8,
      first_name: "Yasmine",
      surname: "Yalla",
      current_company: "Bose",
      gender: "Prefer not to say",
    },
    {
      seeker_id: 9,
      first_name: "Oliver",
      surname: "Oldness",
      current_company: "Solpassion Music Ltd",
      gender: "Male",
    },
    {
      seeker_id: 10,
      first_name: "Jolene",
      surname: "Desperado",
      current_company: "Malasyan Airlines",
      gender: "Prefer not to say",
    },
    {
      seeker_id: 11,
      first_name: "Berry",
      surname: "Blast",
      current_company: "Xccelerate",
      gender: "Prefer not to say",
    },
    {
      seeker_id: 12,
      first_name: "Oswald",
      surname: "Oyeye",
      current_company: "Apple",
      gender: "Prefer not to say",
    },
  ]);
};
