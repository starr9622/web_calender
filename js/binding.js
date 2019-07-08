let weekTitle = ['일', '월', '화', '수', '목', '금', '토'];
function dayschedule(){
    var today = [ weekTitle[moment(selectWeek).weekday()]+" "+moment(selectWeek).format('DD')];
    makerow(false, today, '');
    for(var h = 0; h <= 23; h++){
        makerow(true, [' '], h+'시', 'day');
    }
}

function weekschedule(){
    var title = 
    [
        weekTitle[0]+' '+moment(selectWeek).weekday(0).format('DD'), 
        weekTitle[1]+' '+moment(selectWeek).weekday(1).format('DD'),
        weekTitle[2]+' '+moment(selectWeek).weekday(2).format('DD'), 
        weekTitle[3]+' '+moment(selectWeek).weekday(3).format('DD'), 
        weekTitle[4]+' '+moment(selectWeek).weekday(4).format('DD'), 
        weekTitle[5]+' '+moment(selectWeek).weekday(5).format('DD'),
        weekTitle[6]+' '+moment(selectWeek).weekday(6).format('DD'),
    ];
    makerow(false, title, '');

    for(var h = 0; h <= 23; h++){
        makerow(true, ['','','','','','',''], h+'시', 'week');
    }
}

function monthschedule(){
    makerow(false, weekTitle, null);

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

function makerow(content, array, flag, key){
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
        //monthly
        if(content 
            && moment(moment().format(selectMonth+'-'+array[i])).format('YYYY-MM-DD') == moment().format('YYYY-MM-DD')){
            item.classList.add('today');
        }
        //weekly
        if(key && moment(moment(selectWeek).weekday(i)).format('YYYY-MM-DD') == moment().format('YYYY-MM-DD')){
            item.classList.add('today');
        }
        //색상값 적용
        if(moment(selectWeek).weekday() == 0){
            item.classList.add('sunday');
        }
        if(moment(selectWeek).weekday() == 6){
            item.classList.add('satday');
        }
        //메모가 있을 경우
        if(false){
            var div = document.createElement('div');
            div.innerHTML="메모"
            div.classList.add('calendarMemo')
            div.classList.add('bg_c_1')

            var div1 = document.createElement('div');
            div1.innerHTML="메모1"
            div1.classList.add('calendarMemo')
            div1.classList.add('bg_c_2')
            
            item.appendChild(div);
            item.appendChild(div1);
        }
        row.appendChild(item);   
    }

    tableItem.appendChild(row);
}

function clearElement(){
    document.querySelectorAll(".calenderInfo tr").forEach(e => e.parentNode.removeChild(e));
    document.querySelector(".calenderHeadInfo tr").remove();
}

$(function(){
    //월간 달력에서 특정 날짜를 클릭했을때 이벤트
    // $(".calenderTable tr td").on('click', function(){
        
    // });
});