// ================ Setting up and editting Finder Profile ==================

class FinderProfileService {
  constructor(knex) {
    this.knex = knex;
  }

  async listprofile(finderId) {
    console.log(`listprofile method called with finderId: ${finderId}`);
    let profile = [];
    if (typeof finderId !== "undefined") {
      try {
        let finderInfo = await this.knex
          .select("*")
          .from("finder")
          .fullOuterJoin(
            "finder_contact",
            "finder.finder_id",
            "finder_contact.finder_id"
          )
          .where("finder.finder_id", finderId);
        profile.push(finderInfo[0]);
        if (finderInfo.length == 1) {
          let finderCustom = await this.knex
            .select("*")
            .from("finder_customfield")
            .where("finder_customfield.finder_id", finderId);
          profile.push(finderCustom);
          let finderJob = await this.knex
            .select("*")
            .from("job")
            .where("job.finder_id", finderId);
          profile.push(finderJob);
          return profile;
        } else {
          console.log("Empty FinderProfile");
        }
      } catch (error) {
        console.log("error reading profile from database: " + error);
      }
    }
  }

  async addProfile(profileInfo, finderId) {
    console.log(
      `addProfile method called with profileInfo: ${profileInfo} and finderId: ${finderId}`
    );
    console.log(profileInfo);
    try {
      let finderMain = await this.knex
        .select("*")
        .from("finder")
        .where("finder.finder_id", finderId);
      if (finderMain.length === 0) {
        await this.knex
          .insert({
            finder_id: finderId,
            finder_name: profileInfo.finder_name,
            finder_description: profileInfo.finder_description,
            finder_size: profileInfo.finder_size,
          })
          .into("finder");
      }
      let finderContact = await this.knex
        .select("*")
        .from("finder_contact")
        .where("finder_contact.finder_id", finderId);
      if (finderContact.length === 0) {
        await this.knex
          .insert({
            finder_id: finderId,
            telephone_number: profileInfo.telephone_number,
            mobile_number: profileInfo.mobile_number,
            email: profileInfo.email,
          })
          .into("finder_contact");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async addcustom(info, finderId) {
    console.log(
      `add method called with info: ${info} and finderId: ${finderId}`
    );
    try {
      await this.knex
        .select("*")
        .from("finder_customfield")
        .where("finder_customfield.finder_id", finderId)
        .insert({
          finder_id: finderId,
          customfield_title: info.infoTitle,
          customfield_content: info.infoContent,
        })
        .into("finder_customfield");
    } catch (error) {
      console.log(error);
    }
  }

  async addNewJob(info, finderId) {
    console.log(
      `add method called with job: ${info.jobTitle} and finderId: ${finderId}`
    );
    try {
      let jobs = await this.knex.select("*").from("job");
      if (jobs.length > 0) {
        await this.knex
          .insert({
            finder_id: finderId,
            job_title: info.jobTitle,
            location: info.jobLocation,
            job_description: info.jobDescription,
          })
          .into("job");
      } else {
        console.log(`error adding job`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updateJob(newJobPost, finderId) {
    console.log(
      `updateJob method called with jobId: ${newJobPost} with finderId: ${finderId}`
    );
    for (let i = 0; i < newJobPost.length; i++) {
      try {
        console.log(newJobPost[i]);
        console.log(finderId);
        console.log(newJobPost[i].jobId);
        let jobposts = await this.knex.select("*").from("job").where({
          finder_id: finderId,
          job_id: newJobPost[i].jobId,
        });
        if (jobposts.length == 1) {
          console.log(`inside the update query if`);
          await this.knex("job")
            .where({
              finder_id: finderId,
              job_id: newJobPost[i].jobId,
            })
            .update({
              job_title: newJobPost[i].infoTitle,
              location: newJobPost[i].infoLocation,
              job_description: newJobPost[i].infoContent,
            });
          console.log(`Here I am done`);
        } else {
          console.log(`Error: unable to update particular customfield`);
        }
        console.log(`done looping`);
      } catch (error) {
        console.log(`there is an error: ${error}`);
      }
    }
  }

  async updateProfile(info, finderId) {
    console.log(info);
    console.log(
      `updateProfile method called with info: ${info} and finderId: ${finderId}`
    );
    try {
      let profile = await this.knex
        .select("*")
        .from("finder")
        .fullOuterJoin(
          "finder_contact",
          "finder.finder_id",
          "finder_contact.finder_id"
        )
        .where("finder.finder_id", finderId);
      if (profile.length === 1) {
        await this.knex("finder").where("finder.finder_id", finderId).update({
          finder_name: info.finder_name,
          finder_description: info.finder_description,
          finder_size: info.finder_size,
        });
        await this.knex("finder_contact")
          .where("finder_contact.finder_id", finderId)
          .update({
            first_name: info.first_name,
            surname: info.surname,
            telephone_number: info.telephone_number,
            mobile_number: info.mobile_number,
            email: info.email,
            role: info.role,
          });
      } else {
        console.log(`Error: unable to find the correct profile`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updateCustom(customInfo, finderId) {
    console.log(
      `updateCustom method called with customfieldId: ${customInfo} with finderId: ${finderId}`
    );
    for (let i = 0; i < customInfo.length; i++) {
      try {
        console.log(customInfo[i]);
        console.log(finderId);
        console.log(customInfo[i].customfieldId);
        let customfields = await this.knex
          .select("*")
          .from("finder_customfield")
          .where({
            finder_id: finderId,
            customfield_id: customInfo[i].customfieldId,
          });
        if (customfields.length == 1) {
          console.log(`inside the update query if`);
          await this.knex("finder_customfield")
            .where({
              finder_id: finderId,
              customfield_id: customInfo[i].customfieldId,
            })
            .update({
              customfield_id: customInfo[i].customfieldId,
              customfield_title: customInfo[i].infoTitle,
              customfield_content: customInfo[i].infoContent,
            });
          console.log(`Here I am done`);
        } else {
          console.log(`Error: unable to update particular customfield`);
        }
        console.log(`done looping`);
      } catch (error) {
        console.log(`there is an error: ${error}`);
      }
    }
  }
  async removeJobPost(jobPost_Id, finderId) {
    console.log(
      `removeJobPost method called with jobPost_id: ${jobPost_Id} and finderId: ${finderId}`
    );
    try {
      let jobPost = await this.knex.select("*").from("job").where({
        finder_id: finderId,
        job_id: jobPost_Id,
      });
      if (jobPost.length === 1) {
        return await this.knex("job")
          .where({
            finder_id: finderId,
            job_id: jobPost_Id,
          })
          .del();
      } else {
        console.log(`error in selecting the correct job post`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async removeCustom(customfield_Id, finderId) {
    console.log(
      `removeCustom method called with customfield_id: ${customfield_Id} and finderId: ${finderId}`
    );
    try {
      let customfield = await this.knex
        .select("*")
        .from("finder_customfield")
        .where({
          finder_id: finderId,
          customfield_id: customfield_Id,
        });
      if (customfield.length === 1) {
        return await this.knex("finder_customfield")
          .where({
            finder_id: finderId,
            customfield_id: customfield_Id,
          })
          .del();
      } else {
        console.log(`error in selecting the correct customfield`);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = FinderProfileService;
