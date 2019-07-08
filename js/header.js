function prebtnAction(){
    switch(tabIndex){
        case '0' :
            break;
        case '1' :
            break;
        default:
            selectMonth = moment(selectMonth).add(-1, 'months').format('YYYY-MM');
            clearElement();
            monthschedule();
    }
}

function nextbtnAction(){
    switch(tabIndex){
        case '0' :
            break;
        case '1' :
            break;
        default:
            selectMonth = moment(selectMonth).add(1, 'months').format('YYYY-MM');
            clearElement();
            monthschedule();
    }
}

function todayAction(){
    console.log("today",tabIndex);
}

function openPopup(){
    let popup = document.querySelector('.popupWrap');
    popup.classList.remove('hidenClass')
}