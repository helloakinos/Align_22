const development = require("../knexfile").development;
const knex = require("knex")(development);
const hashFunction = require("../passport/hashFunction");
const TABLE_NAMEF = "finder_login";
const TABLE_NAME = "seeker_login";

function postFacebook(username, facebookId) {
  return knex(TABLE_NAME)
    .insert({
      seeker_name: username,
      facebook_id: facebookId,
    })
    .returning("seeker_id");
}

function postMicrosoft(username, microsoftId) {
  return knex(TABLE_NAME)
    .insert({
      seeker_name: username,
      microsoft_id: microsoftId,
    })
    .returning("seeker_id");
}

function postGmail(username, gmailId) {
  console.log(gmailId);
  console.log(username);
  return knex(TABLE_NAME)
    .insert({
      seeker_name: username,
      gmail_id: gmailId,
    })
    .returning("seeker_id");
}

function userExists(username) {
  return knex(TABLE_NAME)
    .count("id as n")
    .where("username", username)
    .then((count) => {
      return count[0].n > 0;
    });
}

function userExistsf(username) {
  return knex(TABLE_NAMEF)
    .count("id as n")
    .where("username", username)
    .then((count) => {
      return count[0].n > 0;
    });
}

function createUser(username, password) {
  return userExists(username)
    .then((exists) => {
      if (exists) {
        return Promise.reject(new Error("user exists"));
      }
    })
    .then(() => hashFunction.hashPassword(password))
    .then((hash) => {
      return knex(TABLE_NAME).insert({
        username: username,
        password: password,
        hash: hash,
      });
    });
}

function createUserf(username, password) {
  return userExists(username)
    .then((exists) => {
      if (exists) {
        return Promise.reject(new Error("user exists"));
      }
    })
    .then(() => hashFunction.hashPassword(password))
    .then((hash) => {
      return knex(TABLE_NAMEF).insert({
        username: username,
        password: password,
        hash: hash,
      });
    });
}

function verify(username, password) {
  getByUsername(username)
    .then((user) => {
      return user;
    })
    .then((user) => {
      let getUser = user[0];
      return hashFunction.checkPassword(password, getUser.hash);
    })
    .then((auth) => {
      console.log("Authorized", auth);
      return auth;
    })
    .then((auth) => {
      if (auth === true) {
        console.log("verified");
        return getByUsername(username);
      } else {
        console.log("not verified");
        return false;
      }
    })
    .then((user) => {
      console.log(user);
      return user[0];
    })
    .catch((error) => {
      console.log("error", error);
    });
}

function signIn(req, res, next) {
  console.log("body", req.body);
  let username = req.body.username;
  let password = req.body.password;
  console.log("Username", username);
  verify(username, password);
  getByUsername(username)
    .then((user) => {
      return user;
    })
    .then((user) => {
      return user && hashFunction.checkPassword(password, user.hash);
    })
    .catch(() => {
      res.status(404).send("error hashing password");
    });
}

function deleteUserf(id) {
  return knex(TABLE_NAMEF)
    .where({ id: id })
    .del()
    .then(() => {
      console.log("deleted user");
    });
}
function deleteUser(id) {
  return knex(TABLE_NAME)
    .where({ id: id })
    .del()
    .then(() => {
      console.log("deleted user");
    });
}
function getAllUsers() {
  let allUsers = knex(TABLE_NAME).select(
    "id",
    "username",
    "microsoft_id",
    "facebook_id",
    "password"
  );
  allUsers
    .then((eachRow) => {
      return eachRow.map((eachUser) => ({
        id: eachUser.id,
        username: eachUser.username,
        twitter_id: eachUser.microsoft_id,
        facebook_id: eachUser.facebook_id,
        password: eachUser.password,
      }));
    })
    .then((eachUser) => {
      console.log("Each user");
      console.log(eachUser);
    });
}

function getAllUsersf() {
  let allUsers = knex(TABLE_NAMEF).select(
    "id",
    "username",
    "microsoft_id",
    "facebook_id",
    "password"
  );
  allUsers
    .then((eachRow) => {
      return eachRow.map((eachUser) => ({
        id: eachUser.id,
        username: eachUser.username,
        twitter_id: eachUser.microsoft_id,
        facebook_id: eachUser.facebook_id,
        password: eachUser.password,
      }));
    })
    .then((eachUser) => {
      console.log("Each user");
      console.log(eachUser);
    });
}

function facebookIdExists(facebookId) {
  return knex(TABLE_NAME)
    .count("id as n")
    .where("facebook_id", facebookId)
    .then((count) => {
      return count[0].n > 0;
    });
}
function gmailIdExists(gmailId) {
  return knex(TABLE_NAME)
    .count("id as n")
    .where("gmail_id", gmailId)
    .then((count) => {
      return count[0].n > 0;
    });
}
function microsoftIdExists(microsoftId) {
  return knex(TABLE_NAME)
    .count("id as n")
    .where("microsoft_id", microsoftId)
    .then((count) => {
      return count[0].n > 0;
    });
}
function getByIdf(id) {
  return knex(TABLE_NAMEF).select().where("finder_id", id);
}

function getById(id) {
  return knex(TABLE_NAME).select().where("seeker_id", id);
}

function getByUsernamef(username) {
  return knex(TABLE_NAMEF)
    .select("id", "username", "microsoft_id", "facebook_id", "hash", "password")
    .where("username", username);
}

function getByUsername(username) {
  return knex(TABLE_NAME)
    .select("id", "username", "microsoft_id", "facebook_id", "hash", "password")
    .where("username", username);
}

function getByGmailId(gmailId) {
  return knex(TABLE_NAME).select().where("gmail_id", gmailId);
}

function getByFacebookId(facebookId) {
  return knex(TABLE_NAME).select().where("facebook_id", facebookId);
}
function getByMicrosoftId(microsoftId) {
  return knex(TABLE_NAME).select().where("microsoft_id", microsoftId);
}
module.exports = {
  //   postUser: postUser,
  verify: verify,
  postFacebook: postFacebook,
  postMicrosoft: postMicrosoft,
  postGmail: postGmail,
  createUser: createUser,
  createUserf: createUserf,
  gmailIdExists: gmailIdExists,
  facebookIdExists: facebookIdExists,
  microsoftIdExists: microsoftIdExists,
  getByIdf: getByIdf,
  getById: getById,
  getByFacebookId: getByFacebookId,
  getByMicrosoftId: getByMicrosoftId,
  getByGmailId: getByGmailId,
  postFacebook: postFacebook,
};
