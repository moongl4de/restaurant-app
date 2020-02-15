// const resies = [];
// const waitList = [];

$("#submit").on("click", function(event) {
    event.preventDefault();
    const newTable = {
      name: $("#name").val().trim(),
      phone: $("#phone").val().trim(),
      email: $("#email").val().trim(),
      id: $("#id").val().trim()
    };
 
    $.post("/api/tables", newResi)
      .then(function(data) {
        console.log("reserve.html", data);
        alert("Adding a reservation...");
      });
  });