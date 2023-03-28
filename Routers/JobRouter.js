const { isCurrentUser } = require("../authFuncs/currentUser");
const { isLoggedIn } = require("../authFuncs/auth");
const { isGuest } = require("../authFuncs/auth");
const { currentUserType } = require("../authFuncs/currentUser");

class JobRouter {
  constructor(jobService, express) {
    this.jobService = jobService;
    this.express = express;
  }

  router() {
    let router = this.express.Router();
    router.get(
      "/jobPage/:id",
      isGuest,
      isCurrentUser,
      this.getJobProfile.bind(this)
    );
    router.post(
      "/api/newJobConnect",
      isLoggedIn,
      this.postJobConnect.bind(this)
    );
    return router;
  }

  getJobProfile(req, res) {
    let isGuest = req.res.locals.isGuest;
    let userData = {};
    if (!isGuest) {
      userData = currentUserType(req.user);
    }
    let jobId = req.params.id;
    this.jobService.JobProfile(jobId).then((JobProfile) => {
      console.log(JobProfile);
      res.render("jobPage", {
        layout: "main",
        profile: JobProfile,
        userData: userData,
      });
    });
  }

  postJobConnect(req, res) {
    let userData = currentUserType(req.user);
    let jobId = req.body.jobId;
    this.jobService
      .jobConnect(jobId, userData)
      .then(() => {
        this.jobService.JobProfile(jobId);
      })
      .then((JobProfile) => {
        console.log(`Here starts the response`);

        console.log(JobProfile);
        res.json(JobProfile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
}

module.exports = JobRouter;
