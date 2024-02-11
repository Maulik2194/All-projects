const password=document.getElementById("password");
const message=document.getElementById("message");
const strength=document.getElementById("strength");
const submitButton=document.querySelector("button");

password.addEventListener("input",function(){

    const passwordValue = password.value;
    const passwordLength = passwordValue.length;

    let strengthValue = '';
    let strengthcolor = '';
    if(password===0){
        strengthValue='';
    }else if(passwordLength<5){
        strengthValue='Weak';
        strengthcolor='red';
    }else if(passwordLength<10){
        strengthValue='Medium';
        strengthcolor='yellow';
    }else{
        strengthValue='Strong';
        strengthcolor='green';
    }

    strength.textContent=strengthValue;
    strength.style.color=strengthcolor;
    message.style.display="block";
});

submitButton.addEventListener("click",function(){

    const passwordType = password.getAttribute('type');
    if(passwordType==='password'){
        password.setAttribute('type','text');
    }else {
        password.setAttribute('type','password');
    }
});