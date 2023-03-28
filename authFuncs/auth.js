// middleware to check if the user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(req.cookies);
    console.log(req.session.passport.user, "passport USER");
    console.log(req.user, "USER");
    if (req.session.passport.user) {
      console.log(req.session.passport.user);
      return next();
    }
  }
  res.redirect("/loginSignup");
}

// middleware checking if a user is logged in and passing a boolean
function isGuest(req, res, next) {
  if (req.isAuthenticated()) {
    if (req.session.passport.user) {
      console.log(req.session.passport.user.finder_id);
      console.log(`I am a user`);
      res.locals.isGuest = false;
      return next();
    }
  }
  res.locals.isGuest = true;
  return next();
}

function isLoggedInSeeker(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(req.cookies);
    console.log(req.session.passport.user, "passport USER");
    console.log(req.user, "USER");
    if (req.session.passport.user.type == "seeker") {
      return next();
    }
  }

  res.redirect("/loginSignup");
}

function isLoggedInFinder(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(req.cookies);
    console.log(req.session.passport.user, "passport USER");
    console.log(req.user, "USER");
    if (req.session.passport.user.type == "finder") {
      return next();
    }
  }

  res.redirect("/login");
}

module.exports = {
  isLoggedIn,
  isLoggedInSeeker,
  isLoggedInFinder,
  isGuest,
};
