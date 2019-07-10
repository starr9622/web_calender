function fetchScheduleList() {
  if (localStorage) {
    for (var i = 0; i < localStorage.length; i++) {
      keylist.push(localStorage.key(i));
      memoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  }
}
