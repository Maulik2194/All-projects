function playsound(note){
    var audio=new Audio();
    audio.src=note+".mp3";
    audio.play();
}