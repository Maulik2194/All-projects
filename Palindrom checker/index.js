function check(){
    enteredWord = document.getElementById("enteredWord").value;
    showOutputElement = document.getElementById("showOutput");

    if(isPalindrome(enteredWord)){
        showOutputElement.innerHTML = `"${enteredWord}" is a palindrome`;
    } else {
        showOutputElement.innerHTML = `"${enteredWord}" is not a palindrome`;
    }
    void showOutputElement.offsetWidth;
    showOutputElement.classList.add('animationClass');
    setInterval(() => showOutputElement.classList.remove('animationClass'),2000);
}

function isPalindrome(str){
    const clearStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(clearStr);
    const reversedStr = clearStr.split('').reverse().join('');
    console.log(reversedStr);

    return clearStr === reversedStr;
}