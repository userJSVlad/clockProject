let hour = document.querySelector('.hour');
let minutes = document.querySelector('.minuts');
let seconds = document.querySelector('.seconds');

setInterval(startClock, 1000);

function startClock() {
   let dat = new Date();
   let hourData = dat.getHours() * 30;
   let minutsData = dat.getMinutes() * 6;
   let secondsData = dat.getSeconds() * 6;
   //console.log(hourData, minutsData, secondsData)
   hour.style.transform = `rotate(${hourData}deg)`;
   minutes.style.transform = `rotate(${minutsData}deg)`;
   seconds.style.transform = `rotate(${secondsData}deg)`;
}