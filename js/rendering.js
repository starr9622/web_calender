switch(tabIndex){
    case '0' :
        dayschedule();
        break;
    case '1' :
        weekschedule();
        break;
    default :
        monthschedule();
}

function dayschedule(){
    console.log('오늘의 스케줄 보여주긔');
}

function weekschedule(){
    console.log('주간 스케줄 보여주긔');
}

function monthschedule(){
    console.log('월간 스케줄 보여주긔');
}