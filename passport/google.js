const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const userQueries = require("../database/userQueries");

const googleConfig = {
  clientID: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: "https://localhost:3000/auth/gmail/callback",
};

function googleCallback(accessToken, refreshToken, profile, done) {
  const user = { username: profile.emails[0].value };
  userQueries
    .getByGmailId(profile.id)
    .then((queryRow) => {
      if (queryRow.length === 0) {
        console.log("creating new user");
        return userQueries
          .postGmail(profile.emails[0].value, profile.id)
          .then((newIds) => {
            user.seeker_id = newIds[0].seeker_id;
            return done(null, user);
          })
          .catch((error) => {
            done(error, false, {
              message: "couldn't add user",
            });
          });
      } else {
        user.seeker_id = queryRow[0].seeker_id;
        return done(null, user);
      }
    })
    .catch((error) => {
      return done(error, false, {
        message: "Couldn't access database",
      });
    });
}
const google = new GoogleStrategy(googleConfig, googleCallback);
module.exports = { google: google };
