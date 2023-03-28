// ================ Router for  Seeker profiles ===============
const { isCurrentUser, currentUserType } = require("../authFuncs/currentUser");
const { isGuest } = require("../authFuncs/auth");

class SProfileRouter {
  constructor(seekerProfileService, express) {
    this.seekerProfileService = seekerProfileService;
    this.express = express;
  }

  router() {
    let router = this.express.Router();
    router.get(
      "/seekerprofile/:id",
      isCurrentUser,
      isGuest,
      this.getSeekerProfile.bind(this)
    );
    router.post("/api/newseekerprofile", this.postSeekerProfileInfo.bind(this));
    router.post("/api/newSeekerCustomfield", this.postCustomField.bind(this));
    router.post("/api/seekerNewEducation", this.postSeekerEducation.bind(this));
    router.post("/api/seekerExperience", this.postSeekerExperience.bind(this));
    router.put("/api/seekerprofile", this.putProfileInfo.bind(this));
    router.put("/api/editSeekerCustomfield", this.putCustomField.bind(this));
    router.put("/api/seekerSaveEducation", this.putSeekerEducation.bind(this));
    router.put("/api/seekerSaveExperience", this.putSeekerExperience.bind(this));
    router.delete(
      "/api/deleteSeekerCustomfield/:id",
      this.deleteCustom.bind(this)
    );
    return router;
  }

  getSeekerProfile(req, res) {
    let isGuest = req.res.locals.isGuest;
    let userData = {};
    if (!isGuest) {
      userData = currentUserType(req.user);
    }
    let seekerId = req.params.id;
    let isCurrentUserBoolean = req.res.locals.isCurrentUserBoolean;
    console.log(`GetSeekerProfile Method in SProfileRouter`);
    this.seekerProfileService.listprofile(seekerId).then((profile) => {
      res.render("impactSeekerProfile", {
        layout: "main",
        profile: profile,
        currentUser: isCurrentUserBoolean,
        userData: userData,
      });
    });
  }

  postSeekerProfileInfo(req, res) {
    let profileInfo = req.body.seekerProfileInfo;
    let seekerId = req.user.seeker_id;
    return this.seekerProfileService
      .addProfile(profileInfo, seekerId)
      .then(() => {
        return this.seekerProfileService.listprofile(seekerId);
      })
      .then((profile) => {
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  postCustomField(req, res) {
    let infoCustomSeeker = req.body.customSeekerInfo;
    let seekerId = req.user.seeker_id;
    console.log("SeekerProfile Router: POST Method");
    console.log(`Current seeker ID: ${seekerId}`);
    console.log(`Info to be edited: ${infoCustomSeeker}`);
    return this.seekerProfileService
      .addcustom(infoCustomSeeker, seekerId)
      .then(() => {
        return this.seekerProfileService.listprofile(seekerId);
      })
      .then((profile) => {
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  postSeekerEducation(req, res) {
    let seekerEd = req.body.seekerEd;
    let seekerId = req.user.seeker_id;
    console.log(`Seeker Profile Router: POST for education`);
    return this.seekerProfileService
      .addEducation(seekerEd, seekerId)
      .then(() => {
        return this.seekerProfileService.listprofile(seekerId);
      })
      .then((profile) => {
        console.log(profile)
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  postSeekerExperience(req, res) {
    let seekerEx = req.body.seekerEx;
    let seekerId = req.user.seeker_id;
    console.log(`Seeker Profile Router: POST for experience`);
    return this.seekerProfileService
      .addExperience(seekerEx, seekerId)
      .then(() => {
        return this.seekerProfileService.listprofile(seekerId);
      })
      .then((profile) => {
        console.log(profile)
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  putProfileInfo(req, res) {
    let seekerInfo = req.body.seekerProfileInfo;
    let seekerId = req.user.seeker_id;
    console.log("SeekerProfile Router: PUT Method");
    console.log(`Current Seeker ID: ${seekerId} and info: ${seekerInfo}`);
    return this.seekerProfileService
      .updateProfile(seekerInfo, seekerId)
      .then(() => {
        return this.seekerProfileService.listprofile(seekerId);
      })
      .then((profile) => {
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  putCustomField(req, res) {
    let infoSeeker = req.body.customInfo;
    let seekerId = req.user.seeker_id;
    console.log("SeekerProfile Router: PUT Method for customfield");
    console.log(
      `Current Seeker ID: ${seekerId} and customfieldInfo: ${infoSeeker}`
    );
    return this.seekerProfileService
      .updateCustom(infoSeeker, seekerId)
      .then(() => {
        return this.seekerProfileService.listprofile(seekerId);
      })
      .then((profile) => {
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  putSeekerEducation(req, res) {
    let seekerEd = req.body.seekerEd;
    let seekerId = req.user.seeker_id;
    console.log("SeekerProfile Router: PUT Method");
    console.log(
      `Current Seeker ID: ${seekerId} and education info: ${seekerEd}`
    );
    return this.seekerProfileService
      .updateEd(seekerEd, seekerId)
      .then(() => {
        return this.seekerProfileService.listprofile(seekerId);
      })
      .then((profile) => {
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  putSeekerExperience(req, res) {
    let seekerEx = req.body.seekerEx;
    let seekerId = req.user.seeker_id;
    console.log("SeekerProfile Router: PUT Method");
    console.log(
      `Current Seeker ID: ${seekerId} and experience : ${seekerEx}`
    );
    return this.seekerProfileService
      .updateEx(seekerEx, seekerId)
      .then(() => {
        return this.seekerProfileService.listprofile(seekerId);
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
    let seekerId = req.user.seeker_id;
    console.log("FProfile Router: DELETE Method");
    console.log(`Current seeker ID: ${seekerId}`);
    console.log(`Current customfieldId: ${customfield_Id}`);
    console.log(customfield_Id);

    return this.seekerProfileService
      .removeCustom(customfield_Id, seekerId)
      .then(() => {
        return this.seekerProfileService.listprofile(seekerId);
      })
      .then((profile) => {
        res.json(profile);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
}

module.exports = SProfileRouter;
