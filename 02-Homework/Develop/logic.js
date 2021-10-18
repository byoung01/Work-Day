let planner = [];

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

  const val = $(this).siblings("textarea").eq(0).val().trim();
  // retrieve the id from the parent
  const id = $(this).parent().attr("id");
  const data = { time: id, text: val };

  localStorage.setItem(id, JSON.stringify(data));
  console.log(data);
});

// const saved = () => {
//]
// };

// saved();

setInterval(function () {
  formatDate();
  $("#currentDay").text(formatDate);
}, 1000);
