function isCurrentUser(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(req.session.passport.user, "passport USER");
    console.log(req.user, "USER");
    if (
      req.session.passport.user.finder_id == req.params.id ||
      req.session.passport.user.seeker_id == req.params.id
    ) {
      res.locals.isCurrentUserBoolean = true;
      return next();
    }
  }
  res.locals.isCurrentUserBoolean = false;
  return next();
}

function currentUserType(currentUser) {
  console.log(`currentUserType function running`);
  let userData = {};
  if (currentUser.finder_id) {
    userData.finder_id = currentUser.finder_id;
    return userData;
  } else if (currentUser.seeker_id) {
    console.log(`I am a seeker`);
    userData.seeker_id = currentUser.seeker_id;
    return userData;
  } else {
    console.log(`error: could not find the usertype and id`);
  }
}

module.exports = {
  isCurrentUser,
  currentUserType,
};
