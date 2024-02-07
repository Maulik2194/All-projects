let calbtn = document.getElementById("calbtn");

calbtn.addEventListener("click", ()=>{

    document.getElementById("details").style.display="block";    
    let inputdata1 = document.getElementById("inputdate").value;
    let olddate = new Date(inputdata1);
    const currentdate =  new Date();

    let differenceinmiliseconds = currentdate - olddate;
    let differencesec = differenceinmiliseconds/1000;

    document.getElementById("age").innerHTML=Math.floor(differencesec/(3600*24*365.25));
    var remaining = differencesec%(3600*24*365.25);
    document.getElementById("months").innerHTML=Math.floor(remaining/(3600*24*30));
    remaining %= (3600*24*30);
    document.getElementById("weeks").innerHTML=Math.floor(remaining/(3600*24*7));
    remaining %= (3600*24*7);
    document.getElementById("days").innerHTML=Math.floor(remaining/(3600*24));
    remaining %= (3600*24);
    document.getElementById("hours").innerHTML=Math.floor(remaining/(3600));
    remaining %= (3600);                              
    document.getElementById("minutes").innerHTML=Math.floor(remaining/(60));
    remaining %= (60);
    document.getElementById("seconds").innerHTML=Math.floor(remaining); 
});

