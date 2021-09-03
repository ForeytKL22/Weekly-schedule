
var currentDate = moment().format('LLL'); 
document.getElementById("currentDay").innerHTML = currentDate;




// $(".description").on("click", function() {
//     var text = $(this).text().trim();
//     var id = $(this).attr("id");
    

// }); 




$(".saveBtn").on("click", function() {
    var hour = $(this).prev().attr("id");
    var description = $(this).prev().val();

    localStorage.setItem(hour, description);

    var retrieveDescription = localStorage.getItem(hour);
    console.log('retrieved: ' + retrieveDescription);

});



// var saveSchedule = function() {
//     localStorage.setItem("schedule", description); 
// };
// document.querySelector(".saveBtn").addEventListener("click", saveSchedule());
// console.log(localStorage);


// var saveSchedule = document.querySelector(".description").value;
// localStorage.setItem("schedule", saveSchedule);
// console.log(localStorage);

