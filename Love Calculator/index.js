let yourName = document.querySelector('.yourName');
let partnerName = document.querySelector('.partnerName');
let output = document.querySelector('.output');

function calculate(){
    if(yourName.value == ''){
        alert("Please Enter Your Name.")
    }else if(partnerName.value == ''){
        alert("Please Enter Partner's Name.")
    }else if(!(isNaN(partnerName.value) && isNaN(yourName.value))){
        alert("please enter Name only in the Text-fields");
    }else {
        let random = Math.floor(Math.random()*101);
        let potential;
        if(random < 25){
            potential='There is no Good chances. You will be single';
        }else if(random < 50){
            potential='There are low chances. Your efforts will determine relation';
        }else if(random < 75){
            potential='There are good chances. Little effort requires.';
        }else {
            potential='There are high chances. Another person is already into you';
        }
        output.innerHTML = `
        <div class="percentage">${yourName.value} and ${partnerName.value}'s Love Percentage : ${random}%</div>
        <div class="chance">${potential}</div>`;

    }
}