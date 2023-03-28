/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("finder_customfield").del();
  await knex("finder_customfield").insert([
    {
      finder_id: 1,
      customfield_title: "Overview",
      customfield_content: "At Microsoft, our mission is to empower every person and every organization on the planet to achieve more. Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Microsoft operates in 190 countries and is made up of 181,000 passionate employees worldwide.",
    },
    {
      finder_id: 1,
      customfield_title: "Specialties",
      customfield_content: "Business Software, Developer Tools, Home & Educational Software, Tablets, Search, Advertising, Servers, Windows Operating System, Windows Applications & Platforms, Smartphones, Cloud Computing, Quantum Computing, Future of Work, Productivity, AI, Artificial Intelligence, Machine Learning, Laptops, Mixed Reality, Virtual Reality, Gaming, Developers, and IT Professional",
    },
    {
      finder_id: 2,
      customfield_title: "Past Clean-up experience",
      customfield_content: "I have partnered with various organizations, offering corporate bodies the opportunity to make an impact and equally increase team cohesion",
    },
    {

      finder_id: 3,
      customfield_title: "Our Values",
      customfield_content: "Our values are integral to the way we work to deliver our vision.  They represent not only our approach to how we work with our partners but how we work with each other",
    },
    {
      finder_id: 3,
      customfield_title: "Employee Testimonial - Jaki Adams",
      customfield_content: "The Foundation's human rights based approach and unwavering support in addressing inequality in health, through an eye health lens, inspires me every day. I accept the challenge to do my bit to ensure Aboriginal and Torres Strait Islander people, my mob, are informed and treated with respect and dignity, whilst being afforded the same right to health as other Australians",
    },
    {
      finder_id: 3,
      customfield_title: "Employee Testimonial - Meng Sokkheang",
      customfield_content: "The Foundation is an international organisation that hires local staff and values their contribution. I am able to have an impact because I am supported and encouraged to achieve our objectives by my team, manager and colleagues. Being a national staff member in Cambodia, I witness the smiles of people in our community who have had their sight restored or improved by the work of The Foundation, and that makes me so proud.",
    },
    {
      finder_id: 3,
      customfield_title: "Headquarters",
      customfield_content: "Rosebery, New South Wales",
    },    
  ]);
};
