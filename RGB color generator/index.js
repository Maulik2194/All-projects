let colorBox = document.getElementById('colorBox');
let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let redResult = document.getElementById('redResult');
let greenResult = document.getElementById('greenResult');
let blueResult = document.getElementById('blueResult');
let copyButton = document.getElementById('copyButton');
let outputButton = document.getElementById('outputButton');

red.addEventListener("input", ()=> {
    redResult.innerHTML = red.value;
    colorBox.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
    outputButton.innerHTML = `rgb(${red.value},${green.value},${blue.value})`;
});
green.addEventListener("input", ()=> {
    greenResult.innerHTML = green.value;
    colorBox.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
    outputButton.innerHTML = `rgb(${red.value},${green.value},${blue.value})`;
});
blue.addEventListener("input", ()=> {
    blueResult.innerHTML = blue.value;
    colorBox.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
    outputButton.innerHTML = `rgb(${red.value},${green.value},${blue.value})`;
});
copyButton.addEventListener("click",() => {
    navigator.clipboard.writeText(`RGB(${red.value},${green.value},${blue.value})`);
    alert(`Color Value has been copied`);
});
