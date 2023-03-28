// Handlebars template for Seeker Name
var seekerNameTemplate = Handlebars.compile(
  `<div class="impactSeekerDiv" id="impactSeekerName">
  {{profile.[0].first_name}} {{profile.[0].surname}}
</div>`
);

// Handlebars template for edit/create button on profile
var seekerProfileEditCreateTemplate =
  Handlebars.compile(`
  <div id="seekerEditCreate">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="float:right;margin-right:5px;">
    {{#if profile.[0].first_name}}
        Edit
    {{else}}
        Create
    {{/if}}
    </button>   
  </div>
`);


// Handlebars template for edit/create button in modal
var seekerProfileEditCreateModalTemplate =
  Handlebars.compile(`<div id="modalEditCreateProfile" class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
{{#if profile.[0].first_name}}
<button data-bs-dismiss="modal"  class="btn btn-primary" id="SaveSeekerProfileEdits">Save</button>
{{else}}
<button data-bs-dismiss="modal" class="btn btn-primary" id="CreateSeekerProfileEdits">Create</button>
{{/if}}
</div>`);

// Handlebars template for main profile info
var seekerProfileTemplate = Handlebars.compile(
  `
  <div class="profileInfo" id="SeekerInfo">
  <h2>Basic information</h2>
  <hr>
  <p style="display:inline-block;width:200px">Current Company: </p>
  {{profile.[0].current_company}}
  <br>
  <p style="display:inline-block;width:200px">Mobile:</p>
  {{profile.[0].mobile_number}}
  <br>
  <p style="display:inline-block;width:200px">Home:</p>
  {{profile.[0].home_number}}
  <br>
  <p style="display:inline-block;width:200px">Email:</p>
  {{profile.[0].email1}}
  <br>
  <p style="display:inline-block;width:200px">Link:</p>
  {{profile.[0].links}}
 
</div>
    `
);

// Handlebars template for custom profile info button
var seekerCustomfieldButtonTemplate =
  Handlebars.compile(`
      {{#if profile.[1]}}
      <button type="button" class="editcustomseeker btn bg-light" data-bs-toggle="modal" data-bs-target="#modalCustomfieldsSeekerEdit">edit</button>
    {{/if}}
    {{#if profile.[0]}}
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCustomfieldsSeeker" style="float:right;">
          Add
      </button> 
    {{else}}
      <span style="float:right;">Please create a profile first.</span> 
    {{/if}}
  `);

// Handlebars template for custom profile modal loop
var seekerCustomModalTemplate = Handlebars.compile(`
<div id="seekerModalCustom">
{{#each profile.[1]}}
<div class="customfieldSeekerdiv" data-id="{{customfield_id}}">
<label for="customeFill">
</label>
<input type="text" class="customFillTitleEditSeeker" name="customFillTitleEditSeeker" value="{{customfield_title}}">
 <br>
 <textarea type="text" class="customFillTitleEditSeeker" name="customFillTextEditSeeker" required>{{customfield_content}}</textarea>
 <button type="button" class="removecustomseeker btn bg-light" data-id="{{customfield_id}}">remove</button>
</div>
{{/each}}
</div>`);

// Handlebars template for custom profile info
var seekerProfileCustomfieldTemplate = Handlebars.compile(
  `{{#each profile.[1]}}
        <div style="margin-bottom:10px">
         <h4>{{customfield_title}}</h4>
         <p>{{customfield_content}}</p>
        </div>
    {{/each}}`
);

var  seekerEducationButton  = Handlebars.compile(
  `
  <div id="seekerEductionButtons">
      {{#if profile.[0]}}
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editEducation" style="float:right;margin-right:5px;">
              {{#if profile.[2].[0].seeker_education_id}}
                  Edit
              {{else}}
                  Add
              {{/if}}
          </button> 
      {{else}}
          <span style="float:right;">Please create a profile first.</span> 
      {{/if}}
  </div>
  `
)

//Handlebars template for seeker education info
var seekerEducation = Handlebars.compile(
  `
  <div class="seekerEd">
    <h2>Education background: </h2>
    <hr>
    <p style="display:inline-block;width:280px">Attained High School degree: </p>
    {{#if profile.[2].[0].highschool_degree}}
        <span>Yes</span>
    {{else}}
        <span>No</span>
    {{/if}}
        <br>
        <p style="display:inline-block;width:280px">Attained University degree: </p>
    {{#if profile.[2].[0].university_degree}}
        <span>Yes</span>
    {{else}}
        <span>No</span>
    {{/if}}
    <br>
    <p style="display:inline-block;width:280px">Other certifications:</p>
    <span>{{profile.[2].[0].other_certifications}}</span>
  </div>
  `
);

var seekerEdModal = Handlebars.compile(
  `<div class="modal-footer seekerEdModal">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
  {{#if profile.[2].[0].seeker_education_id}}
      <button data-bs-toggle="modal" data-bs-target="#editEducation"  class="btn btn-primary" id="SaveEducation">Save</button>
  {{else}}
      <button data-bs-toggle="modal" data-bs-target="#editEducation" class="btn btn-primary" id="CreateEducation">Create</button>
  {{/if}}
</div>`
);

var seekerEx = Handlebars.compile(
  `
  <div id="seekerEx">
    <p>{{profile.[3].[0].experience}}</p>
  </div>
  `
)

var seekerExperienceButton = Handlebars.compile(
  `
  <div id="seekerExperienceButton">
    {{#if profile.[0]}}
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#seekerExperienceForm" style="float:right;">
        {{#if profile.[3]}}
        Edit    
        {{else}}
        Add
        {{/if}}
    </button> 
    {{else}}
        <span style="float:right;">Please create a profile first.</span> 
    {{/if}}
  </div>
  `
)

var seekerExTemplate = Handlebars.compile(
  `
  <div class="modal-body seekerExTemplate">
    <form id="seekerExperience">
        <label for="seekerExperience">
        <textarea id="seekerExperience" name="seekerExperience">{{profile.[3].[0].experience}}</textarea>
    </form>
  </div>
  `
)

var seekerExBottomButtton = Handlebars.compile(
  `
  <div class="modal-footer" id="seekerExBottomButton">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
    {{#if profile.[3]}}
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#seekerExperienceForm" id="SaveExperience">Save</button>
    {{else}}
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#seekerExperienceForm" id="AddExperience">Add</button>
    {{/if}}
  </div>
  `
)


const reloadSeekerName = (profile) => {
  console.log(`reload seeker name function:`);
  console.log(profile);
  $("#impactSeekerName").html(seekerNameTemplate({ profile }));
};

const reloadSeekerEditCreate = (profile) => {
  $("#seekerEditCreate").html(seekerProfileEditCreateTemplate({ profile }));
};

const reloadSeekerEditCreateModal = (profile) => {
  $("#modalEditCreateProfile").html(
    seekerProfileEditCreateModalTemplate({ profile })
  );
};

const reloadSeekerCustomButton = (profile) => {
  $("#seekerCustomEdit").html(seekerCustomfieldButtonTemplate({ profile }));
};

const reloadSeekerCustomModal = (profile) => {
  $("#seekerModalCustom").html(seekerCustomModalTemplate({ profile }));
};

const reloadSeekerProfileInfo = (profile) => {
  console.log(`reload seeker profile function:`);
  console.log(profile);
  $("#SeekerInfo").html(seekerProfileTemplate({ profile }));
};

const reloadSeekerCustomInfo = (profile) => {
  $("#SeekerCustomField").html(seekerProfileCustomfieldTemplate({ profile }));
};

const reloadSeekerEdButton = (profile) =>{
  $("#seekerEductionButtons").html(seekerEducationButton({profile}))
}

const reloadSeekerEd = (profile) => {
  $(".seekerEd").html(seekerEducation({ profile }));
};

const reloadSeekerEdModal = (profile) => {
  $(".seekerEdModal").html(seekerEdModal({ profile }));
};

const reloadSeekerEx = (profile) => {
  $("#seekerEx").html(seekerEx({profile}))
}

const reloadSeekerExButton = (profile) =>  {
  $("#seekerExperienceButton").html(seekerExperienceButton({profile}))
}

const reloadSeekerExModal = (profile) => {
  $(".seekerExTemplate").html(seekerExTemplate({profile}))
}

const reloadSeekerButtomButton = (profile) => {
  $("#seekerExBottomButton").html(seekerExBottomButtton({profile}))
}



// event listeners for the buttons on the seeker profile page
$(() => {
  $(document).on("click", "#SaveSeekerProfileEdits", (e) => {
    console.log("Save button pressed");
    e.preventDefault();
    let seekerProfileInfo = {
      first_name: $("input[name=impactSeekerFirstName]").val(),
      surname: $("input[name=impactSeekerSurname]").val(),
      home_number: $("input[name=impactSeekerHomeNumber]").val(),
      mobile_number: $("input[name=impactSeekerMobileNumber]").val(),
      email1: $("input[name=impactSeekerEmail]").val(),
      link: $("input[name=impactSeekerLink]").val(),
    };
    axios
      .put("https://localhost:3000/api/seekerprofile", {
        seekerProfileInfo: seekerProfileInfo,
      })
      .then((res) => {
        reloadSeekerName(res.data);
        reloadSeekerProfileInfo(res.data);
        console.log(res.data);
      });
  });

  $(document).on("click", "#CreateSeekerProfileEdits", (e) => {
    console.log("Create button pressed");
    e.preventDefault();
    let seekerProfileInfo = {
      first_name: $("input[name=impactSeekerFirstName]").val(),
      surname: $("input[name=impactSeekerSurname]").val(),
      home_number: $("input[name=impactSeekerHomeNumber]").val(),
      mobile_number: $("input[name=impactSeekerMobileNumber]").val(),
      email1: $("input[name=impactSeekerEmail]").val(),
      link: $("input[name=impactSeekerLink]").val(),
    };
    axios
      .post("https://localhost:3000/api/newseekerprofile", {
        seekerProfileInfo: seekerProfileInfo,
      })
      .then((res) => {
        reloadSeekerName(res.data);
        reloadSeekerProfileInfo(res.data);
        reloadSeekerEditCreate(res.data);
        reloadSeekerEditCreateModal(res.data);
        reloadSeekerCustomButton(res.data);
        reloadSeekerEdButton(res.data);
        reloadSeekerExButton(res.data);
        console.log(res.data);
      });
  });

  $(document).on("click", "#SaveSeekerCustomField", (e) => {
    console.log("Save seeker customfield button pressed");
    e.preventDefault();
    let customSeekerAdd = {
      infoTitle: $("input[name=customfieldSeekerTitle]").val(),
      infoContent: $("textarea[name=customfieldSeekerContent]").val(),
    };
    console.log(customSeekerAdd);
    $("input[name=customfieldSeekerTitle]").val("");
    $("textarea[name=customfieldSeekerContent]").val("");
    axios
      .post("https://localhost:3000/api/newSeekerCustomfield", {
        customSeekerInfo: customSeekerAdd,
      })
      .then((res) => {
        reloadSeekerCustomInfo(res.data);
        reloadSeekerCustomButton(res.data);
        reloadSeekerCustomModal(res.data);
        console.log(res.data);
      });
  });

  $(document).on("click", "#editSeekerCustomField", (e) => {
    e.preventDefault();
    let infoArray = [];
    $(".customfieldSeekerdiv").each((i, obj) => {
      console.log(`this is obj: `, obj);
      let customEdit = {};
      customEdit.customfieldId = $(obj).data("id");
      customEdit.infoTitle = $(obj)
        .children("input[name=customFillTitleEditSeeker]")
        .val();
      customEdit.infoContent = $(obj)
        .children("textarea[name=customFillTextEditSeeker]")
        .val();
      infoArray.push(customEdit);
    });
    console.log(infoArray);
    axios
      .put("https://localhost:3000/api/editSeekerCustomfield", {
        customInfo: infoArray,
      })
      .then((res) => {
        reloadSeekerCustomInfo(res.data);
        reloadSeekerCustomButton(res.data);
        reloadSeekerCustomModal(res.data);
        console.log(res.data);
      });
  });
  $(document).on("click", ".removecustomseeker", (e) => {
    e.preventDefault();
    let divId = $(e.target).data("id");
    console.log(divId);
    axios
      .delete(`https://localhost:3000/api/deleteSeekerCustomfield/${divId}`)
      .then((res) => {
        reloadSeekerCustomInfo(res.data);
        reloadSeekerCustomButton(res.data);
        reloadSeekerCustomModal(res.data);
        console.log(res.data);
        $(`div[data-id=${divId}]`).remove();
      });
  });

  $(document).on("click", "#CreateEducation", (e) => {
    console.log("Create education button pressed");
    e.preventDefault();
    let seekerEducation = {
      university_degree: $("select[name=impactSeekerUniversityDegree]").val(),
      highschool_degree: $("select[name=impactSeekerHighSchoolDegree]").val(),
      other_certifications: $("textarea[name=OtherCertification]").val(),
    };
    axios
      .post("https://localhost:3000/api/seekerNewEducation", {
        seekerEd: seekerEducation,
      })
      .then((res) => {
        reloadSeekerEd(res.data);
        reloadSeekerEditCreateModal(res.data);
        reloadSeekerEdButton(res.data)
        reloadSeekerEdModal(res.data)
        console.log(res.data);
      });
  });

  $(document).on("click", "#SaveEducation", (e) => {
    console.log("Save education button pressed");
    e.preventDefault();
    let seekerEducation = {
      university_degree: $("select[name=impactSeekerUniversityDegree]").val(),
      highschool_degree: $("select[name=impactSeekerHighSchoolDegree]").val(),
      other_certifications: $("textarea[name=OtherCertification]").val(),
    };
    axios
      .put("https://localhost:3000/api/seekerSaveEducation", {
        seekerEd: seekerEducation,
      })
      .then((res) => {
        reloadSeekerEd(res.data);
        reloadSeekerEditCreateModal(res.data);
        console.log(res.data);
      });
  });

  $(document).on("click", "#AddExperience", (e) => {
    console.log("Add experience button pressed");
    e.preventDefault();
    let seekerExperience = {
      experience: $("textarea[name=seekerExperience]").val(),
    };
    axios
      .post("https://localhost:3000/api/seekerExperience", {
        seekerEx: seekerExperience,
      })
      .then((res) => {
        reloadSeekerEx(res.data);
        reloadSeekerExButton(res.data)
        reloadSeekerExModal(res.data)
        reloadSeekerButtomButton(res.data)
        console.log(res.data);
      });
  });

  $(document).on("click", "#SaveExperience", (e) => {
    console.log("Save experience button pressed");
    e.preventDefault();
    let seekerExperience = {
      experience: $("textarea[name=seekerExperience]").val()
    };
    axios
      .put("https://localhost:3000/api/seekerSaveExperience", {
        seekerEx: seekerExperience,
      })
      .then((res) => {
        reloadSeekerEx(res.data);
        console.log(res.data);
      });
  });

});
