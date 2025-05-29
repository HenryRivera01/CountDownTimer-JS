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
const items = document.querySelectorAll(".deadline-format h4"); //Nodelist with all h4 items what are in the deadline-format divs

let futureDate = new Date(2026, 0, 14, 17, 30, 0);

const year = futureDate.getFullYear(); //2026
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const month = months[futureDate.getMonth()];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} at ${hours}:${minutes}pm`;

//future time in ms
const futureTime = futureDate.getTime();


function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1 s = 1000ms
  // 1 min = 60s
  // 1 hr = 60 min
  // 1 day = 24 hr

  // Values in ms

  const oneDay = 24 * 60 * 60 * 1000; //value of ms in one day
  const oneHour = 60 * 60 * 1000; //value of ms in one hour
  const oneMinute = 60 * 1000; //value of ms in one hour

  /* Calculates all values */

  let days = Math.floor(t/oneDay)
  let hours = Math.floor((t % oneDay) /oneHour) // After complete x numbers of days i get the remaining in hours
  let minutes =  Math.floor((t % oneHour) / oneMinute) 
  let seconds =  Math.floor((t % oneMinute) / 1000); 

  //Set values array

  const values = [days, hours, minutes, seconds];

  function format(item){
    if(item < 10){
      return item = `0${item}`
    }
    return item
  }

  items.forEach((item,index)=>{
    item.innerHTML = format(values[index]);
  });
  if(t<0){
    clearInterval(countDown)
    deadline.innerHTML = `<h4 class='expired> sorry, this giveaway has expired`
  }
}

//CountDown 

let countDown = setInterval(getRemainingTime, 1000);


getRemainingTime();
