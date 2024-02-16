let inputdata=document.getElementById("inputstring");
let btn1 = document.getElementById("btn");

btn1.addEventListener("click", ()=> {
    console.log("btn clicked");
    inputdata.value="";
});

function countvowel(){
    let result = document.getElementById("output");
    let vowels = 0;
    let string1 = (inputdata.value).toString();
    if(string1.match("a")){
        vowels += string1.match(/a/g).length;
    } if(string1.match("e")){
        vowels += string1.match(/e/g).length;
    } if(string1.match("i")){
        vowels += string1.match(/i/g).length;
    } if(string1.match("o")){
        vowels += string1.match(/o/g).length;
    } if(string1.match("u")){
        vowels += string1.match(/u/g).length;
    } if(string1.match("A")){
        vowels += string1.match(/A/g).length;
    } if(string1.match("E")){
        vowels += string1.match(/E/g).length;
    } if(string1.match("I")){
        vowels += string1.match(/I/g).length;
    } if(string1.match("O")){
        vowels += string1.match(/O/g).length;
    } if(string1.match("U")){
        vowels += string1.match(/U/g).length;
    }else{
        result.innerHTML = "There are no vowels in enter text."
    }
    result.style.visibility= "visible";
    result.innerHTML = "Total Vowels: " + vowels;
}