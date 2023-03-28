// Before each time you run jest test: un the commands below in you CLI
// knex migrate:rollback --env testing
// knex migrate:latest --env testing
// knex seed:run --env testing
// This resets the testing database we want to use within this application

// run the test with: --forceExit

const SeekerProfileService = require("../Service/SeekerProfileService.js");
require("dotenv").config();

const knex = require("knex")({
  client: "pg",
    connection: {
      database: "yala",
      user: "postgres",
      password: "password",
    },
  });

describe("SeekerProfileServiceQueries", () => {
  beforeEach(() => {
    jest.setTimeout(20000);

    seekerService = new SeekerProfileService(knex);
  });

  test("List the correct finder profile seeded 1", () => {
    return seekerService.listprofile(1).then((seeker) => {
      expect(seeker).toEqual(
        [
          {
            seeker_id: 1,
            first_name: 'Bella',
            surname: 'Asturo',
            current_company: 'Xccelerate',
            date_joined: null,
            gender: 'Female',
            cv_id: null,
            favourite_finders: null,
            favourite_jobs: null,
            current_location: null,
            mobile_number: 112345678,
            home_number: 187654321,
            email1: 'bella@test.com',
            email2: null,
            links: 'www.portfoliopage.com'
          },
          [
            {
              customfield_id: 1,
              seeker_id: 1,
              customfield_title: 'Person Project',
              customfield_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas tincidunt tortor, in tincidunt magna vehicula in. Nam fringilla eu metus vitae malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque at mi tellus. Cras mollis lacinia pretium. Donec et tellus quis lorem convallis rhoncus. Aenean orci turpis, volutpat iaculis sapien vehicula, ultrices venenatis est. Etiam at magna eget metus vehicula rutrum ut eu dolor. Morbi cursus blandit dolor sed condimentum. Ut volutpat vestibulum lectus eu finibus. Nam scelerisque erat quam, quis varius neque semper a.'
            },
            {
              customfield_id: 2,
              seeker_id: 1,
              customfield_title: 'Customfield Bouya',
              customfield_content: 'Another crazy custom field filled with dummy text, enjoy'
            },
            {
              customfield_id: 3,
              seeker_id: 1,
              customfield_title: 'Campaigns lead',
              customfield_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas tincidunt tortor, in tincidunt magna vehicula in. Nam fringilla eu metus vitae malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque at mi tellus. Cras mollis lacinia pretium. Donec et tellus quis lorem convallis rhoncus. Aenean orci turpis, volutpat iaculis sapien vehicula, ultrices venenatis est. Etiam at magna eget metus vehicula rutrum ut eu dolor. Morbi cursus blandit dolor sed condimentum. Ut volutpat vestibulum lectus eu finibus. Nam scelerisque erat quam, quis varius neque semper a.'
            }
          ],
          [
            {
              seeker_education_id: 1,
              seeker_id: 1,
              university_degree: true,
              highschool_degree: true,
              other_certifications: 'Black Smith Apprentice & Driving License'
            }
          ],
          [
            {
              experience_id: 1,
              seeker_id: 1,
              experience: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas tincidunt tortor, in tincidunt magna vehicula in. Nam fringilla eu metus vitae malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque at mi tellus. Cras mollis lacinia pretium. Donec et tellus quis lorem convallis rhoncus. Aenean orci turpis, volutpat iaculis sapien vehicula, ultrices venenatis est. Etiam at magna eget metus vehicula rutrum ut eu dolor. Morbi cursus blandit dolor sed condimentum. Ut volutpat vestibulum lectus eu finibus. Nam scelerisque erat quam, quis varius neque semper a Integer finibus eu turpis vitae hendrerit. Cras interdum leo sit amet purus fermentum interdum. Aenean molestie, tellus maximus consequat cursus, augue orci lobortis quam, vitae posuere sem metus vel sapien. Sed rhoncus arcu scelerisque lobortis eleifend. Fusce eleifend lectus vitae maximus porttitor. Integer dictum id diam vitae vestibulum. In tempor eget nunc at malesuada. Mauris porta auctor iaculis. Maecenas accumsan lobortis est, non euismod lectus dictum non. Duis congue consequat ex quis condimentum.Curabitur in auctor elit. Aenean quis commodo magna. Nulla condimentum libero leo, et dictum mauris sagittis id. Nam bibendum a lacus id dictum. Vestibulum non massa fringilla, dictum nunc quis, tincidunt purus. Pellentesque semper viverra hendrerit. Nunc auctor eleifend porta. Phasellus sed ante nibh. Morbi id velit nec ante tincidunt malesuada. Suspendisse eu rhoncus nibh, eu ornare nunc. Nam venenatis sagittis risus, at consequat magna maximus eu. Donec a orci volutpat, ullamcorper nisl a, vehicula ipsum. Quisque a viverra ex.Nulla velit lacus, placerat eu urna viverra, mattis pharetra tortor. Sed vel efficitur est. Ut tincidunt lorem sed quam blandit, eu posuere lacus eleifend. Fusce sagittis eros eu erat imperdiet fringilla. Nam eget varius mi. In hac habitasse platea dictumst. Etiam vitae orci magna. Morbi dui tellus, egestas ut vehicula nec, lobortis a nibh.'
            }
          ]
        ]
      );
    });
  });

});
