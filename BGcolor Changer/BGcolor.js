let body=document.body;
//setInterval(Run,1000);
//or
body.addEventListener("click",Run);

function Run(){
    const letters="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    console.log(color);
    body.style.backgroundColor=color;
}

//or Another way as below

// function Run(){
//     let a=(Math.floor(Math.random()*256));
//     let b=(Math.floor(Math.random()*256));
//     let c=(Math.floor(Math.random()*256));
//     let d="rgb("+a+","+b+","+c+")";
//     console.log(d);
//     body.style.backgroundColor=d;
// }