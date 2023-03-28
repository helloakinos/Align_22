/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("finder_contact").del();
  await knex("finder_contact").insert([
    {
      finder_id: "1",
      first_name: "rowValue1",
      surname: "surname",
      telephone_number: 12345679,
      mobile_number: 12345671,
      email: "hello1@test.com",
      preferred_contact: "Madame Ya Lign",
      role: "CEO",
    },
    {
      finder_id: "2",
      first_name: "rowValue2",
      surname: "surname",
      telephone_number: 12345633,
      mobile_number: 12345644,
      email: "hello2@test.com",
      preferred_contact: "Madame Ya Lign",
      role: "CEO",
    },
    {
      finder_id: "3",
      first_name: "rowValue3",
      surname: "surname",
      telephone_number: 92345678,
      mobile_number: 99345678,
      email: "hello3@test.com",
      preferred_contact: "Madame Ya Lign",
      role: "CEO",
    },
  ]);
};
