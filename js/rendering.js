let temp = location.href.split("?");
var tabIndex = 2;

if(temp[1]){
    data=temp[1].split("=");
    tabIndex = data[1];
}

var selectMonth = moment().format('YYYY-MM');
var selectWeek = moment().format('YYYY-MM-DD');

$(document).ready(function () {
    var today = moment().format('YYYY.MM.DD');
    document.querySelector("#today").innerHTML = today;
    document.querySelector("#selectMonth").innerHTML = selectMonth;

    switch(tabIndex){
        case '0' :
            $(".calenderWrap table").addClass('weeklyTable dailyTable');
            $(".dayBtn").addClass('seleteBtn');
            $("#selectMonth").hide();
            dayschedule()
            break;
        case '1' :
            $(".calenderWrap table").addClass('weeklyTable tableColoring');
            $(".weekBtn").addClass('seleteBtn');
            $("#selectMonth").hide();
            weekschedule();
            break;
        default :
            $(".calenderWrap table").addClass('calenderTable');
            $(".monthBtn").addClass('seleteBtn');
            $("#selectMonth").show();
            monthschedule();
    }

});