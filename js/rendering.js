let temp = location.href.split("?");
let tabIndex = 2;

if (temp[1]) {
  data = temp[1].split("=");
  tabIndex = data[1];
}

const memobgc = ["bg_c_1", "bg_c_2", "bg_c_3", "bg_c_4", "bg_c_5"];

let selectMonth = moment().format("YYYY-MM");
let selectWeek = moment().format("YYYY-MM-DD");
let keylist = [];
let memoItems = [];
let weekTitle = ["일", "월", "화", "수", "목", "금", "토"];
let selectMemoIndex = 0;

$(document).ready(function() {
  let today = moment().format("YYYY.MM.DD");
  document.querySelector("#today").innerHTML = today;
  document.querySelector("#selectMonth").innerHTML = selectMonth;

  fetchScheduleList();

  switch (tabIndex) {
    case "0":
      $(".calenderWrap table").addClass("weeklyTable dailyTable");
      $(".dayBtn").addClass("seleteBtn");
      $("#selectMonth").hide();
      dayschedule();
      break;
    case "1":
      $(".calenderWrap table").addClass("weeklyTable tableColoring");
      $(".weekBtn").addClass("seleteBtn");
      $("#selectMonth").hide();
      weekschedule();
      break;
    default:
      $(".calenderWrap table").addClass("calenderTable");
      $(".monthBtn").addClass("seleteBtn");
      $("#selectMonth").show();
      monthschedule();
  }
});
