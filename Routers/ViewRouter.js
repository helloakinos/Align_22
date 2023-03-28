// const { isCurrentFinder } = require("../authFuncs/currentUser");
const { isCurrentUser } = require("../authFuncs/currentUser");
const { isLoggedIn } = require("../authFuncs/auth");
const { isGuest } = require("../authFuncs/auth");
const { currentUserType } = require("../authFuncs/currentUser");

// ================ Router for  job postings ===================

class ViewRouter {
  constructor(finderProfileService, exploreService, express) {
    this.finderProfileService = finderProfileService;
    this.exploreService = exploreService;

    this.express = express;
  }

  router() {
    let router = this.express.Router();
    router.get("/", isGuest, this.getHome.bind(this));
    router.get("/loginSignup", isGuest, this.getLogin.bind(this));
    router.get(
      "/impactFinderPreview",
      isGuest,
      this.getImpactFinderPreview.bind(this)
    );
    router.get("/jobBoard", isGuest, this.getJobBoard.bind(this));
    router.get(
      "/ImpactSeekerPreview",
      isGuest,
      isLoggedIn,
      this.getImpactSeekerPreview.bind(this)
    );
    router.get(
      "/jobApplicationForm",
      isGuest,
      this.getJobApplicationForm.bind(this)
    );
    router.get("/logout", function (req, res) {
      req.session.passport.user = null;
      res.redirect("/loginSignUp");
    });
    return router;
  }

  getHome(req, res) {
    console.log(`Is the user persisting`);
    console.log(req.user);
    let isGuest = req.res.locals.isGuest;
    let userData = {};
    if (!isGuest) {
      userData = currentUserType(req.user);
    }
    console.log(isGuest);
    res.render("home", {
      layout: "main",
      userData: userData,
    });
  }

  getLogin(req, res) {
    res.render("login", {
      layout: "main",
    });
  }

  getImpactFinderPreview(req, res) {
    let isGuest = req.res.locals.isGuest;
    let userData = {};
    if (!isGuest) {
      userData = currentUserType(req.user);
    }
    this.exploreService.allFinders().then((allFinders) => {
      console.log(allFinders);
      res.render("impactFinderPreview", {
        layout: "main",
        allFinders: allFinders,
        userData: userData,
      });
    });
  }

  getJobBoard(req, res) {
    let isGuest = req.res.locals.isGuest;
    let userData = {};
    if (!isGuest) {
      userData = currentUserType(req.user);
    }
    this.exploreService.allJobs().then((allJobs) => {
      console.log(allJobs);
      res.render("jobBoard", {
        layout: "main",
        allJobs: allJobs,
        userData: userData,
      });
    });
  }

  getImpactSeekerPreview(req, res) {
    let isGuest = req.res.locals.isGuest;
    let userData = {};
    if (!isGuest) {
      userData = currentUserType(req.user);
    }
    this.exploreService.allSeekers().then((allSeekers) => {
      console.log(allSeekers);
      res.render("impactSeekerPreview", {
        layout: "main",
        allSeekers: allSeekers,
        userData: userData,
      });
    });
  }

  getJobApplicationForm(Req, res) {
    res.render("jobApplicationForm", {
      layout: "main",
    });
  }

  getLogout(req, res) {
    req.session.passport.user = null;
    res.redirect("/loginSignUp");
  }
}

module.exports = ViewRouter;
