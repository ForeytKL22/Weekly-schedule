
var description = document.querySelector(".description");





var currentDate = moment().format('LLL'); 
document.getElementById("currentDay").innerHTML = currentDate;






$(".description").on("click", function() {
    var text = $(this).text().trim();

    var descriptionInput = $("<textarea>")
    // .addClass
    .val(text);
$(".description").replaceWith(descriptionInput);
    
}); 




$(".saveBtn").on("click", function() {
        // localStorage.setItem("data", description);
        // localStorage.getItem("data");
});
