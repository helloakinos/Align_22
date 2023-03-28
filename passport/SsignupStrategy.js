const development = require("../knexfile").development;
const hashFunction = require("./hashFunction");
const knex = require("knex")(development);
const TABLE_NAME = "seeker_login";
const LocalStrategy = require("passport-local").Strategy;
module.exports = new LocalStrategy(async (username, password, done) => {
  try {
    // get the user
    let users = await knex(TABLE_NAME).where({
      seeker_name: username,
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
    const newSeeker = {
      seeker_name: username,
      hash: hashedPassword,
      
    };
    //insert the new user, get the id
    let seekerId = await knex(TABLE_NAME).insert(newSeeker).returning("seeker_id");
    // assign that id to the user
    newSeeker.id = seekerId[0];
    // done - pass back the user object
    done(null, newSeeker.id);
  } catch (error) {
    console.log(error);
  }
});
