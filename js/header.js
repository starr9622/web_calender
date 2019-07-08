function prebtnAction(){
    switch(tabIndex){
        case '0' :
            selectWeek = moment(selectWeek).add(-1, 'days').format('YYYY-MM-DD');
            clearElement();
            dayschedule();
            break;
        case '1' :
            selectWeek = moment(selectWeek).add(-7, 'days').format('YYYY-MM-DD');
            clearElement();
            weekschedule();
            break;
        default:
            selectMonth = moment(selectMonth).add(-1, 'months').format('YYYY-MM');
            clearElement();
            monthschedule();
            document.querySelector("#selectMonth").innerHTML = selectMonth;
    }
}

function nextbtnAction(){
    switch(tabIndex){
        case '0' :
            selectWeek = moment(selectWeek).add(1, 'days').format('YYYY-MM-DD');
            clearElement();
            dayschedule();
            break;
        case '1' :
            selectWeek = moment(selectWeek).add(7, 'days').format('YYYY-MM-DD');
            clearElement();
            weekschedule();
            document.querySelector("#selectMonth").innerHTML = selectMonth;
            break;
        default:
            selectMonth = moment(selectMonth).add(1, 'months').format('YYYY-MM');
            clearElement();
            monthschedule();
            document.querySelector("#selectMonth").innerHTML = selectMonth;
    }
}

function todayAction(){
    switch(tabIndex){
        case '0' :
            selectWeek = moment().format('YYYY-MM-DD');
            clearElement();
            dayschedule();
            break;
        case '1' :
            selectWeek = moment().format('YYYY-MM-DD');
            clearElement();
            weekschedule();
            break;
        default:
            selectMonth = moment().format('YYYY-MM');
            clearElement();
            monthschedule();
            document.querySelector("#selectMonth").innerHTML = selectMonth;
    }
}

function openPopup(){
    let popup = document.querySelector('.popupWrap');
    popup.classList.remove('hidenClass')
}