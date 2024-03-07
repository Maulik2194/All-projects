let enterValue = document.getElementById("enterValue");
  enterValue.addEventListener("input", countdown)
function countdown() {
  setInterval(() =>{
    let Days = document.getElementById("Days");
    let Hrs = document.getElementById("Hrs");
    let Min = document.getElementById("Min");
    let Sec = document.getElementById("Sec");
    let TargetDate = new Date(enterValue.value);
    let currentDate = new Date();
    let reminder = 0;
    let differentSec = TargetDate - currentDate;
    //  console.log(Days,Hrs,Min,Sec, TargetDate, currentDate, differentSec);
    Days.value = Math.floor(differentSec/(24*3600*1000));
    reminder = Math.floor((differentSec)%(24*3600*1000));
    Hrs.value = Math.floor((reminder)/(3600*1000));
    reminder = (reminder)%(3600*1000);
    Min.value = Math.floor((reminder)/(60*1000));
    reminder = (reminder)%(60*1000);
    Sec.value = Math.floor((reminder)/1000);
    //  console.log(Days.value,reminder);
  },1000);
}