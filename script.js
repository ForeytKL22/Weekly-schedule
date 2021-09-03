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
    localStorage.setItem("schedule", description).value; // returns [object HTMLDivElement]
    // have also tried JSON.stringify in front of description but it
    // just returns {} 
    console.log(localStorage.getItem("schedule"));
});



// var saveSchedule = function() {
//     localStorage.setItem("schedule", description); 
// };
// document.querySelector(".saveBtn").addEventListener("click", saveSchedule());
// console.log(localStorage);


// var saveSchedule = document.querySelector(".description").value;
// localStorage.setItem("schedule", saveSchedule);
// console.log(localStorage);

