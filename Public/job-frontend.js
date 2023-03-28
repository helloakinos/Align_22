// Handlebars template for Seeker Connect
var seekerConnectedTemplate = Handlebars.compile(`<p>helle</p>`);

// reload function to be called after connecting
const reloadSeekerConnect = (job) => {
  console.log(`job reload function called`);
  $("#jobConnectedYes").html(seekerConnectedTemplate({ job }));
};

// event handling for the connect button
$(() => {
  $(document).on("click", "#connectButtonSend", (e) => {
    console.log(`connect request send`);
    e.preventDefault();
    let jobId = $("#connectButtonSend").data("id");
    axios
      .post("https://localhost:3000/api/newJobConnect", { jobId: jobId })
      .then((res) => {
        reloadSeekerConnect(res.data);
      });
  });
});
