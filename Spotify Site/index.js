// Initiating all the variables
import {songs} from './songs.js';
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let backwardPlay = document.getElementById('backwardPlay');
let forwardPlay = document.getElementById('forwardPlay');
let songButton = document.getElementsByClassName('songButton');
let songitemsElement = document.getElementsByClassName('songItems');
let gifimg = document.getElementById('gifimg');
let songInfo = document.getElementsByClassName('songInfo');
let currentTiming = document.getElementById('currentTiming');
let myProgressBar = document.getElementById('myProgressBar');
let totalTime = document.getElementById('totalTime');
let songIndex = 0;

// Show all songs data in songItems class div

for(let i=0; i<songs.length; i++){
  songitemsElement[0].innerHTML += 
  `<div class="songItem">
    <img class="coverImg" src="${songs[i].coverPath}" alt="1">
    <span class="songName">${songs[i].Name}</span>
    <span class="songlistplay">
      <span class="songDuration">${songs[i].Duration}</span>
      <i class="fa-solid fa-2x fa-circle-play songItemPlay songButton" id=${i}></i>
    </span>
  </div>`;
}

// All Function for each actions


function play(){
  audioElement.src = songs[songIndex].filePath;
  audioElement.play();
  totalTime.innerHTML = songs[songIndex].Duration;
  gifimg.style.opacity = 1 ;
  songInfo[0].innerHTML = `${songs[songIndex].Name}`;
  
}

function pause(){
  audioElement.pause();
  gifimg.style.opacity = 0;
}
function updatebutton(x){
  switch (x){
    case 1: 
      console.log('Main Play or song play button Paused');
      songButton[songIndex].classList.remove('fa-circle-pause');
      songButton[songIndex].classList.add('fa-circle-play');
      masterPlay.classList.remove('fa-circle-pause');
      masterPlay.classList.add('fa-circle-play');
    break;
    case 2:
      console.log('Main Play or song play button play');
      songButton[songIndex].classList.remove('fa-circle-play');
      songButton[songIndex].classList.add('fa-circle-pause');
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
    break;
    case 3:
      console.log('backward button Clicked');
      songButton[songIndex].classList.remove('fa-circle-play');
      songButton[songIndex].classList.add('fa-circle-pause');
      songButton[songIndex+1].classList.remove('fa-circle-pause');
      songButton[songIndex+1].classList.add('fa-circle-play');
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
    break;
    case 4:
      console.log('forward button clicked');
      songButton[songIndex].classList.remove('fa-circle-play');
      songButton[songIndex].classList.add('fa-circle-pause');
      songButton[songIndex-1].classList.remove('fa-circle-pause');
      songButton[songIndex-1].classList.add('fa-circle-play');
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
    break;
    case 5:
      console.log('all button paused');
      masterPlay.classList.remove('fa-circle-pause');
      masterPlay.classList.add('fa-circle-Play');
      for(let i=0; i<songs.length; i++){
        songButton[i].classList.remove('fa-circle-pause');
        songButton[i].classList.add('fa-circle-play');
      }
      
    break;
    default :
    console.log('all button paused');
    break;
  }
}

function updateCurrentTiming(){
  let calctime = parseInt(audioElement.currentTime);
  let mins = parseInt(calctime/60);
  let secs = parseInt(calctime%60);
  if(secs <10 && mins <10) {
    currentTiming.innerHTML = `0${mins}:0${secs}`
  }else if(secs < 10){
    currentTiming.innerHTML = `${mins}:0${secs}`
  }else if(mins < 10){
    currentTiming.innerHTML = `0${mins}:${secs}`
  }else {
  currentTiming.innerHTML = `${mins}:${secs}`;
  }
  let calctime2 = (audioElement.currentTime/audioElement.duration)*100;
  myProgressBar.value = calctime2;
}

function updateAudio(x) {
  audioElement.pause();
  let percentage = (x);
  let calctime1 = songs[songIndex].Duration;
  let mins = parseFloat(calctime1.slice(0,2));
  let secs = parseFloat(calctime1.slice(3,5));
  let totalsecs = mins*60 + secs;
  let currentsecs = totalsecs * percentage/100;
  play();  
  audioElement.currentTime = currentsecs;
}
  
// Playback button functionality.

masterPlay.addEventListener('click', () => {
  if(audioElement.paused || audioElement.currentTime <=0){
    play();
    updatebutton(2);
  }
  else{
    pause();
    updatebutton(1);
  }
});


// backward  button functionality.
backwardPlay.addEventListener("click", () => {
  audioElement.pause();
  if(songIndex == 0) {
    songIndex = 0;
  }else {
    songIndex--;
  }
  play();
  updatebutton(3);
});

// forward button functionality.
forwardPlay.addEventListener('click', () => {
  audioElement.pause();
  if(songIndex < songs.length - 1){
    songIndex++;
  }else {
    songIndex = songs.length - 1;
  }
  play();
  updatebutton(4);
});

// Each Song play/pause button functionality.

for (let x of songButton){
  x.addEventListener('click' , (e) => {
    updatebutton(5);
    if(audioElement.paused){
      songIndex = e.target.id;
      play();
      updatebutton(2);
      console.log("playing");

      
    }
     else if(songIndex == e.target.id){
      pause();
      updatebutton(5);
      updatebutton(1);
      console.log("tried to pause");
    }else{
      pause();
      updatebutton(5);
      songIndex = e.target.id;
      updatebutton(2);
      play();
    }
  })
}

// click event on progressBar and audioELement

// Current time update
audioElement.addEventListener('timeupdate', updateCurrentTiming);

// ProgressBar update
myProgressBar.addEventListener("change", (e) => {
  updatebutton(2);
  updateAudio(e.target.value);
})
// Event listen for auto next song
audioElement.addEventListener("timeupdate", (e) => {

  if(audioElement.currentTime >= audioElement.duration) {
    if(songIndex >= songs.length-1){
      pause();
      updatebutton(5);
      updatebutton(1);
    }else{
    songIndex ++;
    updatebutton(5);
    console.log(songIndex);
    play();
    updatebutton(2);
    }
  }
});