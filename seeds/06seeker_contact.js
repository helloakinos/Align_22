/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("seeker_contact").del();
  await knex("seeker_contact").insert([
    {
      seeker_id: 1,
      mobile_number: 112345678,
      home_number: 187654321,
      email1: "bella@test.com",
      links: "www.portfoliopage.com",
    },
    {
      seeker_id: 2,
      mobile_number: 212345678,
      home_number: 287654321,
      email1: "stella@test.com",
      links: "www.portfoliopage.com",
    },
    {
      seeker_id: 3,
      mobile_number: 312345678,
      home_number: 387654321,
      email1: "christine@test.com",
      links: "www.portfoliopage.com",
    },
    {
      seeker_id: 4,
      mobile_number: 412345678,
      home_number: 487654321,
      email1: "dave@test.com",
      links: "www.portfoliopage.com",
    },
    {
      seeker_id: 5,
      mobile_number: 512345678,
      home_number: 587654321,
      email1: "boris@test.com",
      links: "www.portfoliopage.com",
    },
    {
      seeker_id: 6,
      mobile_number: 612345678,
      home_number: 687654321,
      email1: "yuli@test.com",
      links: "www.portfoliopage.com",
    },
    {
      seeker_id: 7,
      mobile_number: 762344321,
      home_number: 798668765,
      email1: "stephano@test.com",
      links: "www.portfoliopage.com",
    },
    {
      seeker_id: 8,
      mobile_number: 872344321,
      home_number: 878768765,
      email1: "yasmine@test.com",
      links: "www.portfoliopage.com",
    },
    {
      seeker_id: 9,
      mobile_number: 982344321,
      home_number: 988768765,
      email1: "oliver@test.com",
      links: "www.portfoliopage.com",
    },
    {
      seeker_id: 10,
      mobile_number: 1029344321,
      home_number: 1099998765,
      email1: "jolene@test.com",
      links: "www.portfoliopage.com",
    },
    {
      seeker_id: 11,
      mobile_number: 1112344321,
      home_number: 1198766665,
      email1: "berry@test.com",
      links: "www.portfoliopage.com",
    },
    {
      seeker_id: 12,
      mobile_number: 1212344321,
      home_number: 1298768765,
      email1: "oswald@test.com",
      links: "www.portfoliopage.com",
    },
  ]);
};
