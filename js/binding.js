function dayschedule(){
    var today = ['일 1'];
    makerow(false, today, '');
    makerow(true, [' '], '1 시');
}

function weekschedule(){
    var title = ['일 1', '월 2', '화 3', '수 4', '목 5', '금 6', '토 7'];
    makerow(false, title, '');
    makerow(true, [1,2,3,4,5,6,7],'1시');
}

function monthschedule(){
    var title = ['일', '월', '화', '수', '목', '금', '토'];
    makerow(false, title, null);
    
    let startDate = moment().format(selectMonth+'-01');
    let endDate = moment(startDate).endOf('month').format('DD');

    var month = [];
    var week = ['','','','','','',''];
    
    for(let i = 1 ; i <= endDate ; i++){
        week[moment(moment().format(selectMonth+'-'+i)).weekday()] = i;
        if(moment(moment().format(selectMonth+'-'+i)).weekday() == 6){
            month.push(week);
            week = ['','','','','','',''];
        }
    }
    
    if(week[0] != ""){
        month.push(week)
    }

    for(let i = 0 ; i < month.length ; i++){
        makerow(true, month[i], null);
    }
}

function makerow(content, array, flag){
    var tableItem = content ? document.querySelector(".calenderInfo") : document.querySelector(".calenderHeadInfo");

    var row = document.createElement('tr');
    
    if(flag != null){
        var item = document.createElement('td');
        item.innerHTML = flag;
        row.appendChild(item);
    }

    for(let i = 0 ; i < array.length; i++){
        var item = content ? document.createElement('td') : document.createElement('th');
        item.innerHTML = array[i];
        if(content 
            && moment(moment().format(selectMonth+'-'+array[i])).format('YYYY-MM-DD') == moment().format('YYYY-MM-DD')){
            item.classList.add('today');
        }
        row.appendChild(item);   
    }

    tableItem.appendChild(row);
}

function clearElement(){
    var tbody = document.querySelectorAll(".calenderInfo tr").forEach(e => e.parentNode.removeChild(e));
    var thead = document.querySelector(".calenderHeadInfo tr");
    thead.remove();
}

$(function(){
    //월간 달력에서 특정 날짜를 클릭했을때 이벤트
    // $(".calenderTable tr td").on('click', function(){
        
    // });
});