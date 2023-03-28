const development = require("../knexfile").development;
const hashFunction = require("./hashFunction");
const knex = require("knex")(development);
const TABLE_NAME = "finder_login";
const LocalStrategy = require("passport-local").Strategy;
module.exports = new LocalStrategy(async (username, password, done) => {
  console.log("signing up");
  console.log("Email", username);
  console.log("Password", password);

  try {
    // get the user
    let users = await knex(TABLE_NAME).where({
      finder_name: username,
    });
    // if there is a user
    if (users.length > 0) {
      // return false - user already exists
      return done(null, false, {
        message: "user already exists",
      });
    } 
    // otherwise, hash their password
    console.log("begin hash");
    let hashedPassword = await hashFunction.hashPassword(password);
    // get the new user
    const newFinder = {
      finder_name: username,
      hash: hashedPassword,
    };
    //insert the new user, get the id
    let finderId = await knex(TABLE_NAME).insert(newFinder).returning("finder_id");
    // assign that id to the user
    newFinder.id = finderId[0];
    // done - pass back the user object
    done(null, newFinder.id);
  } catch (error) {
    console.log(error);
  }
});
