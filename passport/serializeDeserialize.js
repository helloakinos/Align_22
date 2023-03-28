const userQueries = require("../database/userQueries");
// passport generates token and puts it in a cookie, then sends it to user browser
function serializeUser(user, done) {
  console.log("Serialize: Passport generates token, puts it in cookie and sends to browser:");
  return done(null, user);
}

// with every request, cookie will be sent back to server. server will take the token, pass it into this function, and turn it into a user
function deserializeUser(id, done) {
    console.log(
    "Deserialize: server will take token from your browser, and run this function to check if user exists"
  );
  if (id.finder_id) {
    userQueries
      .getByIdf(id.finder_id)
      .then((users) => {
        if (users.length === 0) {
          return done(null, false);
        }
        done(null, users[0]);
      })
      .catch((err) => {
        console.log("DESERIALSE FAIL");
        done(err, false);
      });
  } else {
    userQueries
      .getById(id.seeker_id)
      .then((users) => {
        if (users.length === 0) {
          return done(null, false);
        }
        done(null, users[0]);
      })
      .catch((err) => {
        console.log("DESERIALSE FAIL");
        done(err, false);
      });
  }
}


module.exports = {
  serializeUser: serializeUser,
  deserializeUser: deserializeUser,
};
