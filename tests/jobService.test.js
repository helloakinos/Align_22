// Before each time you run jest test: un the commands below in you CLI
// knex migrate:rollback --env testing
// knex migrate:latest --env testing
// knex seed:run --env testing
// This resets the testing database we want to use within this application

// run the test with: --forceExit

const JobService = require("../Service/JobService.js");
require("dotenv").config();

const knex = require("knex")({
  client: "pg",
    connection: {
      database: "yala",
      user: "postgres",
      password: "password",
    },
  });

describe("JobServiceQueries", () => {
  beforeEach(() => {
    jest.setTimeout(20000);

    jobService = new JobService(knex);
  });

  test("List the correct jobs seeded", () => {
    return jobService.JobProfile(3).then((jobs) => {
      expect(jobs).toEqual(
        [
          [
            {
              job_id: 3,
              finder_id: 3,
              job_title: 'Volunteer Optician',
              job_description: "As a technical practitioner, you will design, fit and dispense lenses for the correction of clients' vision.",
              location: 'HK',
              vetted: true,
              number_of_seekers: null,
              min_salary: null,
              max_salary: null,
              finder_name: 'animalsinneed',
              finder_description: 'This project aims to help animals in need',
              finder_size: 20
            }
          ],
          [
            {
              contact_id: 3,
              finder_id: 3,
              first_name: 'rowValue3',
              surname: 'surname',
              telephone_number: 92345678,
              mobile_number: 99345678,
              email: 'hello3@test.com',
              preferred_contact: 'Madame Ya Lign',
              role: 'CEO'
            }
          ],
          []
        ]
      );
    });
  });

});
