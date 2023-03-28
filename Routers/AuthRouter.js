require("dotenv").config();
const bunyan = require("bunyan");
const express = require("express");
const msal = require("@azure/msal-node");
const passportFunctions = require("../passport");
const config = require("../config");
const log = bunyan.createLogger({
  name: "Yalalign Web Application",
});

class AuthRouter {
  router() {
    let router = express.Router();

    router.post(
      "/signupFormFinder",
      passportFunctions.authenticate("flocal-signup", {
        successRedirect: "/loginSignup",
        failureFlash: true,
        failureRedirect: "/loginSignup",
      })
    );

    router.post(
      "/signupFormSeeker",
      passportFunctions.authenticate("slocal-signup", {
        successRedirect: "/loginSignup",
        failureFlash: true,
        failureRedirect: "/loginSignup",
      })
    );

    router.post(
      "/loginFormFinder",
      passportFunctions.authenticate("flocal-login", {
        successRedirect: "/",
        failureFlash: true,
        failureRedirect: "/loginSignup",
      })
    );

    router.post(
      "/loginFormSeeker",
      passportFunctions.authenticate("slocal-login", {
        successRedirect: "/",
        failureFlash: true,
        failureRedirect: "/loginSignup",
      })
    );

    router.get(
      "/auth/gmail",
      passportFunctions.authenticate("google", {
        scope: ["profile", "email"],
      })
    );

    router.get(
      "/auth/gmail/callback",
      passportFunctions.authenticate("google", {
        successRedirect: "/",
        failureRedirect: "/loginSignup",
      })
    );

    router.get(
      "/auth/microsoft",
      function (req, res, next) {
        passportFunctions.authenticate("azuread-openidconnect", {
          response: res, // required
          resourceURL: config.resourceURL, // optional. Provide a value if you want to specify the resource.
          customState: "my_state", // optional. Provide a value if you want to provide custom state value.
          failureRedirect: "/",
        })(req, res, next);
        console.log("lookout " + res);
      },
      function (req, res) {
        log.info("Login was called in the Sample");
        res.redirect("/");
      }
    );

    router.get(
      "/auth/openid/return",
      function (req, res, next) {
        passport.authenticate("azuread-openidconnect", {
          failureRedirect: "/",
        })(req, res, next);
      },
      function (req, res) {
        log.info("We received a return from AzureAD.");
        res.redirect("/");
      }
    );

    router.post(
      "/microsoftredirect",
      function (req, res, next) {
        console.log("bibek, check here");
        passportFunctions.authenticate("azuread-openidconnect", {
          response: res,
          failureRedirect: "/",
        })(req, res, next);
      },
      function (req, res) {
        log.info("We received a return from AzureAD.");
        res.redirect("/");
      }
    );

    router.get(
      "/auth/facebook",
      passportFunctions.authenticate("facebook", {
        scope: ["email", "public_profile"],
      })
    );

    router.get(
      "/auth/facebook/callback",
      passportFunctions.authenticate("facebook", {
        successRedirect: "/",
        failureRedirect: "/loginSignup",
      })
    );

    router.get("/logout", (req, res) => {
      req.logout();
      res.render("login");
    });

    return router;
  }
}

module.exports = AuthRouter;
