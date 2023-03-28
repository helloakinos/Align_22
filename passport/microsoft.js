
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;
const passport = require('passport');
const config = require("../config.js");
const userQueries = require('../database/userQueries.js');

const microsoftConfig = {
  identityMetadata: config.creds.identityMetadata,
  clientID: config.creds.clientID,
  responseType: config.creds.responseType,
  responseMode: config.creds.responseMode,
  redirectUrl: config.creds.redirectUrl,
  allowHttpForRedirectUrl: config.creds.allowHttpForRedirectUrl,
  clientSecret: config.creds.clientSecret,
  validateIssuer: config.creds.validateIssuer,
  isB2C: config.creds.isB2C,
  issuer: config.creds.issuer,
  passReqToCallback: config.creds.passReqToCallback,
  scope: config.creds.scope,
  loggingLevel: config.creds.loggingLevel,
  nonceLifetime: config.creds.nonceLifetime,
  nonceMaxAmount: config.creds.nonceMaxAmount,
  useCookieInsteadOfSession: config.creds.useCookieInsteadOfSession,
  cookieEncryptionKeys: config.creds.cookieEncryptionKeys,
  clockSkew: config.creds.clockSkew,
}

  function microsoftCallback(iss, sub, profile, accessToken, refreshToken, done) {
    if (!profile.oid) {
      return done(new Error("No oid found"), null);
    } else{
      const user = { username: profile.displayName };
      userQueries
      .getByMicrosoftId (profile.oid)
      .then((queryRow) => {
        if (queryRow.length === 0) {
          console.log("Creating new user");
          return userQueries
            .postMicrosoft(profile.displayName, profile.oid)
            .then((newIds) => {
              user.seeker_id = newIds[0].seeker_id;
              return done(null, user);
            })
            .catch((error) => {
              done(error, false, {
                message: "couldn't add microsoft user",
              });
            });
          }else{
            user.seeker_id = queryRow[0].seeker_id;
            return done(null, user);
          }
        })
        .catch((error) => {
          console.log("failed to add microsoft user");
          return done(error, false, {
            message: "couldn't check database",
          });
        });
  }
  }

const microsoft = passport.use (new OIDCStrategy(microsoftConfig, microsoftCallback));
module.exports = {microsoft: microsoft};