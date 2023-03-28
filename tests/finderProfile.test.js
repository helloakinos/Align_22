// Before each time you run jest test: un the commands below in you CLI
// knex migrate:rollback --env testing
// knex migrate:latest --env testing
// knex seed:run --env testing
// This resets the testing database we want to use within this application

// run the test with: --forceExit

const FinderProfileService = require("../Service/FinderProfileService.js");
require("dotenv").config();

const knex = require("knex")({
  client: "pg",
    connection: {
      database: "yala",
      user: "postgres",
      password: "password",
    },
  });

describe("FinderProfileQueries", () => {
  beforeEach(() => {
    jest.setTimeout(20000);

    findProfileService = new FinderProfileService(knex);
  });

  test("List the correct finder profile seeded 1", () => {
    return findProfileService.listprofile(1).then((finders) => {
      expect(finders).toEqual(
        [
          {
            finder_id: 1,
            finder_name: 'Microsoft',
            vetted: true,
            finder_description: 'Technology to change and improve lives',
            finder_size: 3,
            contact_id: 1,
            first_name: 'rowValue1',
            surname: 'surname',
            telephone_number: 12345679,
            mobile_number: 12345671,
            email: 'hello1@test.com',
            preferred_contact: 'Madame Ya Lign',
            role: 'CEO'
          },
          [
            {
              customfield_id: 1,
              finder_id: 1,
              customfield_title: 'Overview',
              customfield_content: 'At Microsoft, our mission is to empower every person and every organization on the planet to achieve more. Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Microsoft operates in 190 countries and is made up of 181,000 passionate employees worldwide.'
            },
            {
              customfield_id: 2,
              finder_id: 1,
              customfield_title: 'Specialties',
              customfield_content: 'Business Software, Developer Tools, Home & Educational Software, Tablets, Search, Advertising, Servers, Windows Operating System, Windows Applications & Platforms, Smartphones, Cloud Computing, Quantum Computing, Future of Work, Productivity, AI, Artificial Intelligence, Machine Learning, Laptops, Mixed Reality, Virtual Reality, Gaming, Developers, and IT Professional'
            }
          ],
          [
            {
              job_id: 1,
              finder_id: 1,
              job_title: 'Community Manager',
              job_description: "As a Community Manager, you will help create and manage our brand voice and image. Your duties include creating and publishing content on all media platforms, reviewing social media and other marketing metrics to build and improve campaign strategies and crafting responses to customers' feedback and messages on various platforms.",
              location: 'HK',
              vetted: null,
              number_of_seekers: null,
              min_salary: null,
              max_salary: null
            }
          ]
        ]
      );
    });
  });

  
  test("List the correct finder profile seeded 2", () => {
    return findProfileService.listprofile(2).then((finders) => {
      expect(finders).toEqual(
        [
          {
            finder_id: 2,
            finder_name: 'poorhelp',
            vetted: true,
            finder_description: 'This project aims to help the poor',
            finder_size: 5,
            contact_id: 2,
            first_name: 'rowValue2',
            surname: 'surname',
            telephone_number: 12345633,
            mobile_number: 12345644,
            email: 'hello2@test.com',
            preferred_contact: 'Madame Ya Lign',
            role: 'CEO'
          },
          [
            {
              customfield_id: 3,
              finder_id: 2,
              customfield_title: 'Past Clean-up experience',
              customfield_content: 'I have partnered with various organizations, offering corporate bodies the opportunity to make an impact and equally increase team cohesion'
            }
          ],
          [
            {
              job_id: 2,
              finder_id: 2,
              job_title: 'Beach clean up',
              job_description: 'Pick up trash and improve marine life. Free beer afterwards',
              location: 'HK',
              vetted: null,
              number_of_seekers: null,
              min_salary: null,
              max_salary: null
            }
          ]
        ]
      );
    });
  });

  test("List the correct finder profile seeded 3", () => {
    return findProfileService.listprofile(3).then((finders) => {
      expect(finders).toEqual(
        [
          {
            finder_id: 3,
            finder_name: 'animalsinneed',
            vetted: true,
            finder_description: 'This project aims to help animals in need',
            finder_size: 20,
            contact_id: 3,
            first_name: 'rowValue3',
            surname: 'surname',
            telephone_number: 92345678,
            mobile_number: 99345678,
            email: 'hello3@test.com',
            preferred_contact: 'Madame Ya Lign',
            role: 'CEO'
          },
          [
            {
              customfield_id: 4,
              finder_id: 3,
              customfield_title: 'Our Values',
              customfield_content: 'Our values are integral to the way we work to deliver our vision.  They represent not only our approach to how we work with our partners but how we work with each other'
            },
            {
              customfield_id: 5,
              finder_id: 3,
              customfield_title: 'Employee Testimonial - Jaki Adams',
              customfield_content: "The Foundation's human rights based approach and unwavering support in addressing inequality in health, through an eye health lens, inspires me every day. I accept the challenge to do my bit to ensure Aboriginal and Torres Strait Islander people, my mob, are informed and treated with respect and dignity, whilst being afforded the same right to health as other Australians"
            },
            {
              customfield_id: 6,
              finder_id: 3,
              customfield_title: 'Employee Testimonial - Meng Sokkheang',
              customfield_content: 'The Foundation is an international organisation that hires local staff and values their contribution. I am able to have an impact because I am supported and encouraged to achieve our objectives by my team, manager and colleagues. Being a national staff member in Cambodia, I witness the smiles of people in our community who have had their sight restored or improved by the work of The Foundation, and that makes me so proud.'
            },
            {
              customfield_id: 7,
              finder_id: 3,
              customfield_title: 'Headquarters',
              customfield_content: 'Rosebery, New South Wales'
            }
          ],
          [
            {
              job_id: 3,
              finder_id: 3,
              job_title: 'Volunteer Optician',
              job_description: "As a technical practitioner, you will design, fit and dispense lenses for the correction of clients' vision.",
              location: 'HK',
              vetted: null,
              number_of_seekers: null,
              min_salary: null,
              max_salary: null
            }
          ]
        ]
      );
    });
  });
  // test("List all seekers seeded", () => {
  //   return exploreService.allSeekers().then((seekers) => {
  //     expect(seekers).toEqual(
  //       [
  //         { seeker_id: 1, first_name: 'Bella', surname: 'Asturo' },
  //         { seeker_id: 2, first_name: 'Stella', surname: 'Bernas' },
  //         { seeker_id: 3, first_name: 'christine', surname: 'claption' },
  //         { seeker_id: 4, first_name: 'Dave', surname: 'Doolitle' },
  //         { seeker_id: 5, first_name: 'Boris', surname: 'Bruin' },
  //         { seeker_id: 6, first_name: 'Yu Li', surname: 'Mgoy' },
  //         { seeker_id: 7, first_name: 'Stephano', surname: 'Align' },
  //         { seeker_id: 8, first_name: 'Yasmine', surname: 'Yalla' },
  //         { seeker_id: 9, first_name: 'Oliver', surname: 'Oldness' },
  //         { seeker_id: 10, first_name: 'Jolene', surname: 'Desperado' },
  //         { seeker_id: 11, first_name: 'Berry', surname: 'Blast' },
  //         { seeker_id: 12, first_name: 'Oswald', surname: 'Oyeye' }
  //       ]
  //     );
  //   });
  // });

  // test("List all jobs seeded", () => {
  //   return exploreService.allJobs().then((jobs) => {
  //     expect(jobs).toEqual(
  //       [
  //         {
  //           job_id: 1,
  //           finder_id: 1,
  //           job_title: 'Community Manager',
  //           job_description: "As a Community Manager, you will help create and manage our brand voice and image. Your duties include creating and publishing content on all media platforms, reviewing social media and other marketing metrics to build and improve campaign strategies and crafting responses to customers' feedback and messages on various platforms.",
  //           location: 'HK',
  //           vetted: null,
  //           number_of_seekers: null,
  //           min_salary: null,
  //           max_salary: null
  //         },
  //         {
  //           job_id: 2,
  //           finder_id: 2,
  //           job_title: 'Beach clean up',
  //           job_description: 'Pick up trash and improve marine life. Free beer afterwards',
  //           location: 'HK',
  //           vetted: null,
  //           number_of_seekers: null,
  //           min_salary: null,
  //           max_salary: null
  //         },
  //         {
  //           job_id: 3,
  //           finder_id: 3,
  //           job_title: 'Volunteer Optician',
  //           job_description: "As a technical practitioner, you will design, fit and dispense lenses for the correction of clients' vision.",
  //           location: 'HK',
  //           vetted: null,
  //           number_of_seekers: null,
  //           min_salary: null,
  //           max_salary: null
  //         }
  //       ]
  //     );
  //   });
//  });



  // test("It should be able to return an empty array for a new user", () => {
  //   return noteService.list("sam").then((notes) => {
  //     expect(notes).toEqual([{ id: 1, content: "one" }]);
  //   });
  // });

  // test("It should be able to add a note from a users note array", () => {
  //   return noteService
  //     .add("first note", "sam")
  //     .then(() => noteService.list("sam"))
  //     .then((notes) => {
  //       expect(notes).toEqual([
  //         { id: 1, content: "one" },
  //         { id: 3, content: "first note" },
  //       ]);
  //     });
  // });

  // test("The service should be able to update a note", () => {
  //   return noteService
  //     .add("second note", "sam")
  //     .then(() => noteService.update(3, "second good note", "sam"))
  //     .then(() => noteService.list("sam"))
  //     .then((notes) => {
  //       expect(notes).toEqual([
  //         { id: 1, content: "one" },
  //         { id: 3, content: "second good note" },
  //         { id: 4, content: "second note" },
  //       ]);
  //     });
  // });

  // test("The service should be able to remove a note", () => {
  //   return noteService
  //     .remove(1, "sam")
  //     .then(() => noteService.list("sam"))
  //     .then((notes) => {
  //       expect(notes).toEqual([
  //         { id: 3, content: "second good note" },
  //         { id: 4, content: "second note" },
  //       ]);
  //     });
  // });

  // test("the service should throw and error for updating a non existing user.", () => {
  //   return noteService.update(1, "note", "john").catch((err) => {
  //     expect(err).toEqual(
  //       new Error("Cannot update a note if the user doesn't exist!")
  //     );
  //   });
  // });

  // test("the service should throw an error for trying to remove a note from a non-existing user", () => {
  //   return noteService.remove(1, "altaf").catch((err) => {
  //     expect(err).toEqual(
  //       new Error(`Cannot remove a note when the user doesn't exist!`)
  //     );
  //   });
  // });
});
