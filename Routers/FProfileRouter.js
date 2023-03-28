// ================ Router for  Finder profile ===================
const { isCurrentUser, currentUserType } = require("../authFuncs/currentUser");
const { isGuest } = require("../authFuncs/auth");

class FProfileRouter {
  constructor(finderProfileService, express) {
    this.finderProfileService = finderProfileService;
    this.express = express;
  }

  router() {
    let router = this.express.Router();
    router.get(
      "/finderprofile/:id",
      isCurrentUser,
      isGuest,
      this.getFinderProfile.bind(this)
    );

    router.post("/api/newfinderprofile", this.postProfileInfo.bind(this));
    router.post("/api/newfindercustomfield", this.postCustomField.bind(this));
    router.post("/api/newjobpost", this.postNewJob.bind(this));
    router.put("/api/editjobpost", this.putjob.bind(this));
    router.put("/api/finderprofile", this.putProfileInfo.bind(this));
    router.put("/api/editfindercustomfield", this.putCustomField.bind(this));
    router.delete(
      "/api/deletejobpost/:id",
      this.deleteJobPost.bind(this));
    router.delete(
      "/api/deletefindercustomfield/:id",
      this.deleteCustom.bind(this));
    

    return router;
  }

  getFinderProfile(req, res) {
    let isGuest = req.res.locals.isGuest;
    let userData = {};
    if (!isGuest) {
      userData = currentUserType(req.user);
    }
    let finderId = req.params.id;
    console.log(`GetFinderProfile Method in FProfileRouter`);
    console.log(finderId);
    let isCurrentUserBoolean = req.res.locals.isCurrentUserBoolean;
    this.finderProfileService.listprofile(finderId).then((profile) => {
      res.render("impactFinderProfile", {
        layout: "main",
        profile: profile,
        currentUser: isCurrentUserBoolean,
        userData: userData,
      });
    });
  }

  postProfileInfo(req, res) {
    let profileInfo = req.body.profile;
    console.log(`Inside router:`);
    console.log(profileInfo);
    let finderId = req.user.finder_id;
    console.log(finderId);
    return this.finderProfileService
      .addProfile(profileInfo, finderId)
      .then(() => {
        return this.finderProfileService.listprofile(finderId);
      })
      .then((profile) => {
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  postCustomField(req, res) {
    let info = req.body.customInfo;
    let finderId = req.user.finder_id;
    console.log("FProfile Router: POST Method");
    console.log(`Current Finder ID: ${finderId}`);
    console.log(`Info to be edited: ${info}`);
    return this.finderProfileService
      .addcustom(info, finderId)
      .then(() => {
        return this.finderProfileService.listprofile(finderId);
      })
      .then((profile) => {
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  postNewJob(req, res) {
    let info = req.body.newJobPost;
    let finderId = req.user.finder_id;
    console.log("FProfile Router: POST Method");
    console.log(`Current Finder ID: ${finderId}`);
    console.log(`Job to be posted: ${info}`);
    return this.finderProfileService
      .addNewJob(info, finderId)

      .then(() => {
        return this.finderProfileService.listprofile(finderId);
      })
      .then((profile) => {
        res.json(profile);
      })

      .catch((error) => {
        res.status(500).json(error);
      });
  }

  putjob(req, res) {
    let info = req.body.newJobPost;
    let finderId = req.user.finder_id;
    console.log("FProfile Router: PUT Method");
    console.log(`Current Finder ID: ${finderId} and job: ${info}`);
    return this.finderProfileService
      .updateJob(info, finderId)
      .then(() => {
        return this.finderProfileService.listprofile(finderId);
      })
      .then((profile) => {
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  putProfileInfo(req, res) {
    let info = req.body.profile;
    let finderId = req.user.finder_id;
    console.log("FProfile Router: PUT Method");
    console.log(`Current Finder ID: ${finderId} and info: ${info}`);
    return this.finderProfileService
      .updateProfile(info, finderId)
      .then(() => {
        return this.finderProfileService.listprofile(finderId);
      })
      .then((profile) => {
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  putCustomField(req, res) {
    let info = req.body.customInfo;
    let finderId = req.user.finder_id;
    console.log("FProfile Router: PUT Method customfield");
    console.log(`Current Finder ID: ${finderId} and customfieldInfo: ${info}`);
    console.log(info);
    return this.finderProfileService
      .updateCustom(info, finderId)
      .then(() => {
        return this.finderProfileService.listprofile(finderId);
      })
      .then((profile) => {
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  deleteJobPost(req, res) {
    let jobPost_Id = req.params.id;
    let finderId = req.user.finder_id;
    console.log("FProfile Router: DELETE Method");
    console.log(`Current Finder ID: ${finderId}`);
    console.log(`Current jobPostId: ${jobPost_Id}`);

    return this.finderProfileService
      .removeJobPost(jobPost_Id, finderId)
      .then(() => {
        return this.finderProfileService.listprofile(finderId);
      })
      .then((profile) => {
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
    }

  deleteCustom(req, res) {
    let customfield_Id = req.params.id;
    let finderId = req.user.finder_id;
    console.log("FProfile Router: DELETE Method");
    console.log(`Current Finder ID: ${finderId}`);
    console.log(`Current customfieldId: ${customfield_Id}`);
    console.log(customfield_Id);

    return this.finderProfileService
      .removeCustom(customfield_Id, finderId)
      .then(() => {
        return this.finderProfileService.listprofile(finderId);
      })
      .then((profile) => {
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
}

module.exports = FProfileRouter;
