let temp = location.href.split("?");
var tabIndex = 2;

if(temp[1]){
    data=temp[1].split("=");
    tabIndex = data[1];
}

$(document).ready(function () {
    var today = moment().format('YYYY.MM.DD');
    document.querySelector("#today").innerHTML = today;

    //tabindex 0:일간 / 1:주간 / 2: 월간
    switch(tabIndex){
        case '0' :
            $("#weekCalendar").remove();
            $("#monthCalendar").remove();
            $(".dayBtn").addClass('seleteBtn');
            break;
        case '1' :
            $('#dayCalendar').remove();
            $("#monthCalendar").remove();
            $(".weekBtn").addClass('seleteBtn');
            break;
        default :
            $('#dayCalendar').remove();
            $("#weekCalendar").remove();
            $(".monthBtn").addClass('seleteBtn');
    }

});

function prebtnAction(){
    console.log('prebtn!!');   
}

function nextbtnAction(){
    console.log('nextbtn!!')
}

function todayAction(){
    console.log("today");
}

function openPopup(){
    let popup = document.querySelector('.popupWrap');
    popup.classList.remove('hidenClass')
}