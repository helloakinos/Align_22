/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("seeker_login").del();
  await knex("seeker_login").insert([
    { seeker_name: "bella" },
    { seeker_name: "stella" },
    { seeker_name: "christine" },
    { seeker_name: "Dave" },
    { seeker_name: "Boris" },
    { seeker_name: "Yu Li" },
    { seeker_name: "Stephano" },
    { seeker_name: "Yasmine" },
    { seeker_name: "Oliver" },
    { seeker_name: "Jolene" },
    { seeker_name: "Berry" },
    { seeker_name: "Oswald" },
  ]);
};
