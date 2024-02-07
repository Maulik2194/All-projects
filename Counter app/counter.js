let resultNumber = document.querySelector('.resultNumber');
let incrementButton = document.querySelector('.incrementButton');
let decrementButton = document.querySelector('.decrementButton');
let resetButton  = document.querySelector('.resetButton');
let tempNumber ; 
tempNumber = localStorage.getItem("numbervalue",tempNumber);

incrementButton.addEventListener("click", ()=> {
    console.log("increment");
    tempNumber++;
    localStorage.setItem("numbervalue", tempNumber);
    resultNumber.innerHTML = tempNumber;

});
decrementButton.addEventListener("click", ()=> {
    console.log("Decrement");   
    if(tempNumber<=0){
        tempNumber = '0';
    }else{
        tempNumber --;
    }
    localStorage.setItem("numbervalue", tempNumber);
    resultNumber.innerHTML = tempNumber;
});
resetButton.addEventListener("click", ()=> {
    console.log("Reset");
    tempNumber = 0;
    resultNumber.innerHTML = tempNumber;
    localStorage.setItem("numbervalue", tempNumber);
});

if(tempNumber==null){
    resultNumber.innerHTML='0';
}else{
    resultNumber.innerHTML=tempNumber;
}