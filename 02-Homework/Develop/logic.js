var activities = document.querySelector("textarea");
var data = JSON.parse(localStorage.getItem("day-schedule"));
var headerTime = document.querySelector("h2");

//Psudo code base

//onload if any local data
// on page load want to use var data to retrieve the locally saved data
//if null dont display in text box

//text
//get an inpot from the user
//store user input locally when save button pressed

//color
//get users time
//if time is past current hour make bg gray
//if time is users current time make bg red
//else make bg green

//time
//get users current time and display it in header
//use users current time to

// function formatDate(today) {
//   var year = today.getFullYear(),
//     month = today.getMonth() + 1,
//     date = today.getDate(),
//     hour = today.getHours(),
//     minutes = today.getMinutes(),
//     seconds = today.getSeconds();
//   return `${month}/${date}/${year} ${hour}:${minutes}:${seconds}`;
// }
pageLoad();
$(".time-block").each(function (Date) {
  // const date = new Date();
  // // const hour = new.getHours();
  // debugger;
  var id = $(this).attr("id");
  var id = parseInt(id.split("-").pop());
  console.log(id);
  // if (id === date.getHours()) {
  //   $("description").style.color = "red";
  //   console.log(id);
  // } else (id > date.getHours()) {
  //   $("description").style.color = "green";
  // }
});
function pageLoad() {
  activities.append(data);
}

$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  var val = $(this).siblings("textarea").eq(0).val().trim();
  var id = $(this).parent().attr("id");
  var id = parseInt(id.split("-").pop());
  data = val;
  // console.log(userText);
  localStorage.setItem("day-schedule", JSON.stringify(data));
});
// setInterval(function () {
//   DocumentFragment.getElementById("currentDay").innerHTML = formatDate(
//     new Date()
//   );
// }, 1000);
