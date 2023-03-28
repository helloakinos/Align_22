class JobService {
  constructor(knex) {
    this.knex = knex;
  }

  async JobProfile(jobId) {
    let fulljob = [];
    if (typeof jobId !== "undefined") {
      try {
        let jobInfo = await this.knex
          .select("*")
          .from("job")
          .fullOuterJoin("finder", "job.finder_id", "finder.finder_id")
          .where("job.job_id", jobId);
        fulljob.push(jobInfo);
        console.log(jobInfo);
        if (jobInfo.length >= 1) {
          let jobContact = await this.knex
            .select("*")
            .from("finder_contact")
            .where("finder_contact.finder_id", jobInfo[0].finder_id);
          fulljob.push(jobContact);
          let jobConnect = await this.knex
            .select("*")
            .from("job_connects")
            .where("job_id", jobId);
          fulljob.push(jobConnect);
          return fulljob;
        } else {
          console.log("Empty FinderProfile");
        }
      } catch (error) {
        console.log("error reading profile from database: " + error);
      }
    }
  }

  async jobConnect(jobId, userData) {
    console.log(`jobConnect method called with jobIb: ${jobId}`);
    console.log(userData);
    if (typeof jobId !== "undefined" && userData.seeker_id) {
      try {
        let connect = await this.knex
          .select("*")
          .from("job_connects")
          .where("job_connects.seeker_id", userData.seeker_id);
        if (connect.length > 0) {
          console.log(
            `Seeker has already connected to this finder on this job post`
          );
          return null;
        } else {
          let seekerData = await this.knex
            .select("first_name", "surname")
            .from("seeker")
            .where("seeker.seeker_id", userData.seeker_id);
          if (seekerData.length == 1) {
            await this.knex
              .insert({
                job_id: jobId,
                seeker_id: userData.seeker_id,
                seeker_first_name: seekerData[0].first_name,
                seeker_surname: seekerData[0].surname,
              })
              .into("job_connects");
          } else {
            console.log(`unable to grab seekerData`);
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(`Error posting connection, Not a validated seeker`);
    }
  }
}

module.exports = JobService;
