const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const deadlineItems = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// --- SET UP THE DEADLINE FOR THE GIVEAWAY ---

// *** 1st variant: fixed date
// let futureDate = new Date(2022, 0, 26, 23, 59, 59);

// *** 2nd variant: a few days from now (to showcase the project)
let futureDate = new Date(tempYear, tempMonth, tempDay + 3, 23, 59, 59);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const date = futureDate.getDate();
// const month = futureDate.getMonth();
const month = months[futureDate.getMonth()];
const weekday = futureDate.getDay();

function suffixedDate(item) {
  var st = [1, 21, 31];
  var nd = [2, 22];
  var rd = [3, 23];
  // var th = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30];
  var result = "";

  if (st.includes(item)) {
    var result = item + "st";
  } 
  else if (nd.includes(item)) {
    var result = item + "nd";
  }
  else if (rd.includes(item)) {
    var result = item + "rd";
  }
  else {result = item + "th";}
  return result;
}

giveaway.textContent = 
  `Giveaway ends on ${weekdays[weekday]}, 
  ${month} ${suffixedDate(date)} ${year}, at ${hours}:${minutes}!`;

// future time in milliseconds
const futureTime = futureDate.getTime();

function getRemainingTime(future) {
  const today = Date.now();
  const t = future - today;
  //console.log(t);
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway is over.</h4>`;
  }

  const msInDays = 1000 * 60 * 60 * 24;
  const msInHours = 1000 * 60 * 60;
  const msInMinutes = 1000 * 60;
  const msInSeconds = 1000;
  const remDays = Math.floor (t / msInDays);
  const remHours = Math.floor((t % msInDays) / msInHours);
  const remMinutes = Math.floor((t % msInHours) / msInMinutes);
  const remSeconds = Math.floor((t % msInMinutes) / msInSeconds);
  
  // set return values in an array
  let values = [remDays, remHours, remMinutes, remSeconds];

  function format(item) {
    if (item < 10) {
        return (item = `0${item}`);
      }
    return item;
  }
    
  deadlineItems.forEach(function(item, index) {
    //let outputValues = getRemainingTime(futureTime);
    let output = format(values[index]);
    //console.log(output);
    item.innerHTML = output;
  });

  return;
}

let countdown = setInterval(getRemainingTime, 1000, futureDate);
//console.log(countdown);
//getRemainingTime(futureDate);

// countdown
