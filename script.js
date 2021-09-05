var currentDate = moment().format('LLL'); 
document.getElementById("currentDay").innerHTML = currentDate;





$(".saveBtn").on("click", function() {
    var hourBlock = $(this).prev().attr("id");
    var description = $(this).prev().val();
    localStorage.setItem(hourBlock, description);
});


var loadDescription = function() {
    var retrieveDescription8 = localStorage.getItem("8");
    document.getElementById("8").innerHTML = retrieveDescription8;
    var retrieveDescription9 = localStorage.getItem("9");
    document.getElementById("9").innerHTML = retrieveDescription9;
    var retrieveDescription10 = localStorage.getItem("10");
    document.getElementById("10").innerHTML = retrieveDescription10;
    var retrieveDescription11 = localStorage.getItem("11");
    document.getElementById("11").innerHTML = retrieveDescription11;
    var retrieveDescription12 = localStorage.getItem("12");
    document.getElementById("12").innerHTML = retrieveDescription12;
    var retrieveDescription1 = localStorage.getItem("13");
    document.getElementById("13").innerHTML = retrieveDescription1;
    var retrieveDescription2 = localStorage.getItem("14");
    document.getElementById("14").innerHTML = retrieveDescription2;
    var retrieveDescription3 = localStorage.getItem("15");
    document.getElementById("15").innerHTML = retrieveDescription3;
    var retrieveDescription4 = localStorage.getItem("16");
    document.getElementById("16").innerHTML = retrieveDescription4;
    var retrieveDescription5 = localStorage.getItem("17");
    document.getElementById("17").innerHTML = retrieveDescription5;
}; 





function colorTimes() {
    for (let i = 8; i <= 17; i++) {
        var checkHour = $('#' + i);
        var currentHour = parseInt(moment().format('LT'));

        if (i < currentHour) {
            checkHour.addClass("past");
        } else if (i === currentHour) {
            checkHour.addClass("present");
        } else {
            checkHour.addClass("future");
        }
    }
};

loadDescription();
colorTimes();




