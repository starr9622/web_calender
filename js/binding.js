function dayschedule() {
  var today = [
    moment(selectWeek).format("YYYY-MM-DD") +
      " (" +
      weekTitle[moment(selectWeek).weekday()] +
      ")",
  ];
  makerow(false, today, "");
  for (var h = 0; h <= 23; h++) {
    makerow(true, [" "], h, "day");
  }
}

function weekschedule() {
  var title = [
    moment(selectWeek)
      .weekday(0)
      .format("YYYY-MM-DD") +
      " (" +
      weekTitle[0] +
      ")",
    moment(selectWeek)
      .weekday(1)
      .format("YYYY-MM-DD") +
      " (" +
      weekTitle[1] +
      ")",
    moment(selectWeek)
      .weekday(2)
      .format("YYYY-MM-DD") +
      " (" +
      weekTitle[2] +
      ")",
    moment(selectWeek)
      .weekday(3)
      .format("YYYY-MM-DD") +
      " (" +
      weekTitle[3] +
      ")",
    moment(selectWeek)
      .weekday(4)
      .format("YYYY-MM-DD") +
      " (" +
      weekTitle[4] +
      ")",
    moment(selectWeek)
      .weekday(5)
      .format("YYYY-MM-DD") +
      " (" +
      weekTitle[5] +
      ")",
    moment(selectWeek)
      .weekday(6)
      .format("YYYY-MM-DD") +
      " (" +
      weekTitle[6] +
      ")",
  ];
  makerow(false, title, "");

  for (var h = 0; h <= 23; h++) {
    makerow(true, ["", "", "", "", "", "", ""], h, "week");
  }
}

function monthschedule() {
  makerow(false, weekTitle, null);

  let startDate = moment().format(selectMonth + "-01");
  let endDate = moment(startDate)
    .endOf("month")
    .format("DD");

  var month = [];
  var week = ["", "", "", "", "", "", ""];

  for (let i = 1; i <= endDate; i++) {
    week[moment(moment().format(selectMonth + "-" + i)).weekday()] = i;
    if (moment(moment().format(selectMonth + "-" + i)).weekday() == 6) {
      month.push(week);
      week = ["", "", "", "", "", "", ""];
    }
  }

  if (week[0] != "") {
    month.push(week);
  }

  for (let i = 0; i < month.length; i++) {
    makerow(true, month[i], null);
  }
}

function makerow(content, array, flag, key) {
  var tableItem = content
    ? document.querySelector(".calenderInfo")
    : document.querySelector(".calenderHeadInfo");

  var row = document.createElement("tr");

  if (flag != null) {
    var item = document.createElement("td");
    item.innerHTML = key == "month" ? flag : flag + " 시";
    row.appendChild(item);
  }

  for (let i = 0; i < array.length; i++) {
    var item = content
      ? document.createElement("td")
      : document.createElement("th");
    item.innerHTML = array[i];
    //monthly
    if (
      content &&
      moment(selectMonth + "-" + array[i]).format("YYYY-MM-DD") ==
        moment().format("YYYY-MM-DD")
    ) {
      item.classList.add("today");
    }
    //weekly
    if (
      key == "week" &&
      moment(moment(selectWeek).weekday(i)).format("YYYY-MM-DD") ==
        moment().format("YYYY-MM-DD")
    ) {
      item.classList.add("today");
    }
    //daily
    if (key == "day" && moment().format("YYYY-MM-DD") == selectWeek) {
      item.classList.add("today");
    }
    //색상값 적용
    if (moment(selectWeek).weekday() == 0) {
      item.classList.add("sunday");
    }
    if (moment(selectWeek).weekday() == 6) {
      item.classList.add("satday");
    }
    //메모가 있을 경우
    if (memoItems.length > 0) {
      memoItems.forEach((element, index) => {
        if (
          array[i] != "" &&
          moment(selectMonth + "-" + array[i]).isSame(element.startday, "day")
        ) {
          var div = document.createElement("div");
          div.innerHTML = element.title;
          div.setAttribute("value", index);
          div.classList.add("calendarMemo");
          div.classList.add(memobgc[Math.round(index % 5)]);

          item.appendChild(div);
        } else if (
          array[i] != "" &&
          moment(selectMonth + "-" + array[i]).isAfter(element.startday) &&
          moment(selectMonth + "-" + array[i]).isSameOrBefore(element.endday)
        ) {
          var div = document.createElement("div");
          div.innerHTML = element.title;
          div.setAttribute("value", index);
          div.classList.add("calendarMemo");
          div.classList.add(memobgc[Math.round(index % 5)]);
          item.appendChild(div);
        }
      });
    }
    row.appendChild(item);
  }

  tableItem.appendChild(row);
}

function clearElement() {
  document
    .querySelectorAll(".calenderInfo tr")
    .forEach(e => e.parentNode.removeChild(e));
  document.querySelector(".calenderHeadInfo tr").remove();
}

$(function() {
  $(".calendarMemo").on("click", function() {
    selectMemoIndex = $(this).attr("value");
    $("#btnSave").addClass("hidenClass");
    $("#btnModify").removeClass("hidenClass");
    $("#btnRemove").removeClass("hidenClass");
    $("#popupTitle").text("일정");

    $("#title").attr("value", memoItems[selectMemoIndex].title);
    $("#startday").attr("value", memoItems[selectMemoIndex].startday);
    $("#endday").attr("value", memoItems[selectMemoIndex].endday);
    $("#content").text(memoItems[selectMemoIndex].memo);

    $(".popupWrap").removeClass("hidenClass");
  });
});
