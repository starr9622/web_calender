function closeAction() {
  $("#title").attr("value", "");
  $("#startday").attr("value", "");
  $("#endday").attr("value", "");
  $("#content").text("");

  let popup = document.querySelector(".popupWrap");
  popup.classList.add("hidenClass");
}

function saveMemoAction() {
  var newMemo = {
    title: document.querySelector("#title").value,
    startday: document.querySelector("#startday").value,
    endday: document.querySelector("#endday").value,
    memo: document.querySelector("#content").value,
  };

  localStorage.setItem(
    keylist[keylist.length - 1] * 1 + 1,
    JSON.stringify(newMemo),
  );
  closeAction();
}
function removeMemoAction() {
  localStorage.removeItem(keylist[selectMemoIndex]);
  location.replace("index.html?viewType=2");
}
function modifyMemoAction() {
  var newMemo = {
    title: document.querySelector("#title").value,
    startday: document.querySelector("#startday").value,
    endday: document.querySelector("#endday").value,
    memo: document.querySelector("#content").value,
  };

  localStorage.setItem(keylist[selectMemoIndex], JSON.stringify(newMemo));
  location.replace("index.html?viewType=2");
}
