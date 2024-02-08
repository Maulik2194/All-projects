const fixedarray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
var output = document.getElementById("colorbox");

function color(){
    const randomarray = new Array();
    for(let i=0;i<6;i++){
        randomarray[i]=fixedarray[Math.floor(Math.random()*15)];
    }
    output.innerHTML= "#" + randomarray.join("");
    output.style.backgroundColor = "#" + randomarray.join("");

}