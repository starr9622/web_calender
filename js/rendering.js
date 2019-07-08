var select = ''; 

let temp = location.href.split("?");
var tabIndex = 2;

if(temp[1]){
    data=temp[1].split("=");
    tabIndex = data[1];
}
var selectMonth = moment().format('YYYY-MM');

$(document).ready(function () {
    var today = moment().format('YYYY.MM.DD');
    document.querySelector("#today").innerHTML = today;

    switch(tabIndex){
        case '0' :
            $(".calenderWrap table").addClass('weeklyTable dailyTable');
            $(".dayBtn").addClass('seleteBtn');
            dayschedule()
            break;
        case '1' :
            $(".calenderWrap table").addClass('weeklyTable');
            $(".weekBtn").addClass('seleteBtn');
            weekschedule();
            break;
        default :
            $(".calenderWrap table").addClass('calenderTable');
            $(".monthBtn").addClass('seleteBtn');
            monthschedule();
    }

});