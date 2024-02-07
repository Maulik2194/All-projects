function time(){
    const today = new Date();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday'];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    // console.log(today);
    let hourOutput = document.getElementById('hourOutput');
    let minuteOutput = document.getElementById('minuteOutput');
    let secondOutput = document.getElementById('secondOutput');
    let dayOutput = document.getElementById('dayOutput');
    let dateOutput = document.getElementById('dateOutput');
    let monthOutput = document.getElementById('monthOutput');

    hourOutput.innerHTML = `${formatTime(formatHour(today.getHours()))} :`;
    minuteOutput.innerHTML = `${formatTime(today.getMinutes())} :`;
    secondOutput.innerHTML = formatTime(today.getSeconds());
    dayOutput.innerHTML =days[today.getDay()];
    dateOutput.innerHTML =today.getDate();
monthOutput.innerHTML =months[today.getMonth()];
}

setInterval(time, 1000);

function formatTime(time){
    return time < 10 ? "0"+time : time;
}

function formatHour(hour){
    return hour > 12 ? hour - 12 : hour;
}