// Before each time you run jest test: un the commands below in you CLI
// knex migrate:rollback --env testing
// knex migrate:latest --env testing
// knex seed:run --env testing
// This resets the testing database we want to use within this application

// run the test with: --forceExit

const ExploreService = require("../Service/ExploreService.js");
require("dotenv").config();

const knex = require("knex")({
  client: "pg",
    connection: {
      database: "yala",
      user: "postgres",
      password: "password",
    },
  });

describe("Databasequeries", () => {
  beforeEach(() => {
    jest.setTimeout(20000);

    exploreService = new ExploreService(knex);
  });

  test("List all finders seeded", () => {
    return exploreService.allFinders().then((finders) => {
      expect(finders).toEqual(
        [
          { finder_id: 1, finder_name: 'Microsoft' },
          { finder_id: 2, finder_name: 'poorhelp' },
          { finder_id: 3, finder_name: 'animalsinneed' }
        ]
      );
    });
  });

  test("List all seekers seeded", () => {
    return exploreService.allSeekers().then((seekers) => {
      expect(seekers).toEqual(
        [
          { seeker_id: 1, first_name: 'Bella', surname: 'Asturo' },
          { seeker_id: 2, first_name: 'Stella', surname: 'Bernas' },
          { seeker_id: 3, first_name: 'christine', surname: 'claption' },
          { seeker_id: 4, first_name: 'Dave', surname: 'Doolitle' },
          { seeker_id: 5, first_name: 'Boris', surname: 'Bruin' },
          { seeker_id: 6, first_name: 'Yu Li', surname: 'Mgoy' },
          { seeker_id: 7, first_name: 'Stephano', surname: 'Align' },
          { seeker_id: 8, first_name: 'Yasmine', surname: 'Yalla' },
          { seeker_id: 9, first_name: 'Oliver', surname: 'Oldness' },
          { seeker_id: 10, first_name: 'Jolene', surname: 'Desperado' },
          { seeker_id: 11, first_name: 'Berry', surname: 'Blast' },
          { seeker_id: 12, first_name: 'Oswald', surname: 'Oyeye' }
        ]
      );
    });
  });

  test("List all jobs seeded", () => {
    return exploreService.allJobs().then((jobs) => {
      expect(jobs).toEqual(
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
          },
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
          },
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
      );
    });
  });



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
