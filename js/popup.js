function closeAction(){
    document.querySelector('#title').value = '';
    document.querySelector('#startday').value = '';
    document.querySelector('#endday').value = '';
    document.querySelector('#content').value  = ''; 

    let popup = document.querySelector('.popupWrap');
    popup.classList.add('hidenClass');   
}

function saveMemoAction(){
    var newMemo = {
        title : document.querySelector('#title').value,
        startday : document.querySelector('#startday').value,
        endday : document.querySelector('#endday').value,
        memo : document.querySelector('#content').value 
    };

    localStorage.setItem(localStorage.length, JSON.stringify(newMemo));
    closeAction();
}