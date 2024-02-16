function Detection(){
    let inputChar = document.getElementById('inputChar').value;
    let unicodeValue = document.getElementById('unicodeValue');
    let unicodeChar = inputChar.charCodeAt(0);

    inputChar == "" ? alert("Enter the character first") : 
    unicodeValue.innerHTML = `
    The Unicode value of "${inputChar}" is ${unicodeChar}`;
}