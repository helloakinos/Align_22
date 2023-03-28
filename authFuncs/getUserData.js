function getUserData(req, res, next) {
let userData = {};
  if (req.isAuthenticated()) {
    console.log(req.cookies);
    console.log(req.session.passport.user, "passport USER");
    console.log(req.user, "USER");
    if (req.session.passport.user) {
      res.locals.isGuest = false;
      console.log(`I am a user`);
      if (req.session.passport.user.finder_id){
        console.log(`I am a finder`);
        userData.finder_id = currentUser.finder_id; 
      }
        req.session.passport.user.finder_id == req.params.id ||
        req.session.passport.user.seeker_id == req.params.id
      ) {
        console.log(req.session.passport.user);
        console.log(`I am visiting my own page`);
        res.locals.isCurrentUserBoolean = true;
        return next();
      }
      return next();
    }
  }
  console.log(`I am a guest`);
  res.locals.isGuest = true;
  res.locals.isCurrentUserBoolean = false;
  return next();
}

module.exports = {
  getUserData,
};
