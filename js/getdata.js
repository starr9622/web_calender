function fetchScheduleList(){
    if(localStorage){
        for(var i = 0; i < localStorage.length ; i++){
            var item = localStorage[i];
            memoItems.push(JSON.parse(item))
        }
    }
}