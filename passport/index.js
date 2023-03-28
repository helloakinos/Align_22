const passport = require("passport");

const googleStrategy = require("./google").google;
const facebookStrategy = require("./facebook").facebook;
const FloginStrategy = require("./FloginStrategy.js");
const SloginStrategy = require("./SloginStrategy.js");
const FsignupStrategy = require("./FsignupStrategy.js");
const SsignupStrategy = require("./SsignupStrategy.js");
const serializeUser = require("./serializeDeserialize")
  .serializeUser;
const deserializeUser = require("./serializeDeserialize")
  .deserializeUser;

passport.use("google", googleStrategy);
passport.use("facebook", facebookStrategy);
passport.use("flocal-login", FloginStrategy);
passport.use("slocal-login", SloginStrategy);
passport.use("flocal-signup", FsignupStrategy);
passport.use("slocal-signup", SsignupStrategy);
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);
module.exports = passport;
