var activities = document.querySelector("textarea");
var data = JSON.parse(localStorage.getItem("day-schedule"));
var headerTime = document.querySelector("h2");

function formatDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let hour = date.getHours();
  if (hour > 12) {
    hour -= 12;
  }
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return (today = `${month}/${day}/${year} ${hour}:${minutes}:${seconds}`);
}

$(".time-block").each(function (data) {
  // getting each blocks set time by taking in data and adding 9
  const time = (data += 9);

  // getting current hour
  const date = new Date();
  const hour = date.getHours();

  if (hour == time) {
    //if hour and time are the same
    $("textarea").addClass("bg-info");
  } else if (time < hour) {
    //if time is less than hours
    $("textarea").addClass("bg-secondary");
  } else {
    $("textarea").addClass("bg-warning");
  }
});
function pageLoad() {
  activities.append(data);
}

$(".saveBtn").on("click", function (event) {
  event.preventDefault();

  console.log(userText);
  localStorage.setItem("day-schedule", JSON.stringify(data));
});

// setInterval(function () {
//   formatDate();
//   $("#currentDay").text(formatDate);
// }, 1000);
