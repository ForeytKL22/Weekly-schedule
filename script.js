var currentDate = moment().format('LLL'); 
document.getElementById("currentDay").innerHTML = currentDate;






$(".saveBtn").on("click", function() {
    var hourBlock = $(this).prev().attr("id");
    var description = $(this).prev().val();
    localStorage.setItem(hourBlock, description);

});


var loadDescription = function() {
    var retrieveDescription8 = localStorage.getItem("8-hour");
    document.getElementById("8-hour").innerHTML = retrieveDescription8;
    var retrieveDescription9 = localStorage.getItem("9-hour");
    document.getElementById("9-hour").innerHTML = retrieveDescription9;
    var retrieveDescription10 = localStorage.getItem("10-hour");
    document.getElementById("10-hour").innerHTML = retrieveDescription10;
    var retrieveDescription11 = localStorage.getItem("11-hour");
    document.getElementById("11-hour").innerHTML = retrieveDescription11;
    var retrieveDescription12 = localStorage.getItem("12-hour");
    document.getElementById("12-hour").innerHTML = retrieveDescription12;
    var retrieveDescription1 = localStorage.getItem("1-hour");
    document.getElementById("1-hour").innerHTML = retrieveDescription1;
    var retrieveDescription2 = localStorage.getItem("2-hour");
    document.getElementById("2-hour").innerHTML = retrieveDescription2;
    var retrieveDescription3 = localStorage.getItem("3-hour");
    document.getElementById("3-hour").innerHTML = retrieveDescription3;
    var retrieveDescription4 = localStorage.getItem("4-hour");
    document.getElementById("4-hour").innerHTML = retrieveDescription4;
    var retrieveDescription5 = localStorage.getItem("5-hour");
    document.getElementById("5-hour").innerHTML = retrieveDescription5;
};

loadDescription();



// var colorTimes = function(time) {
//     var timeSlot = $(time).find("")
// }

var checkHour = querySelector(".description");
var currentHour = parseInt(moment().format('LT'));



// $(".description").each(function(){
//     if (currentHour < )
// });



