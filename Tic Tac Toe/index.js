let resetbtn = document.getElementById('resetbtn');
let startbtn = document.getElementById('startbtn');
let clickable = document.getElementsByClassName('clickable');
let animationText1 = document.getElementsByClassName("animationText1");
let animationText2 = document.getElementsByClassName("animationText2");
let turn = document.getElementById('turn');
let Result = document.getElementById("Result");
let Symbol = "X";
let playerMove = 0;
let gameOver = false;

resetbtn.addEventListener("click", () => {
  for(x of clickable){
    x.innerHTML = "";
    x.disabled = false;
  }
  animationText1[0].style.animationName ="";
  animationText2[0].style.animationName ="";
  turn.innerHTML = "";
  Result.innerHTML = "";
  playerMove = 0;
  Symbol = "X";
  gameOver = false;
});

startbtn.addEventListener("click", ()=> {
  animationText1[0].style.animationName = "fadetext";
  animationText2[0].style.animationName = "fadetext";
  for(x of clickable){
    x.addEventListener ("click", (e)=> {
      if(!gameOver){
        if(Symbol=="X"){
          e.target.innerHTML = "O";
          Symbol="O";
        }else{
          e.target.innerHTML = "X";
          Symbol="X";
        } 
        e.target.disabled = true;
        playerMove++;
        checkwin();
        playerTurn();
    }
    })
  }

  let checkwin = () => {
    if (
      (clickable[0].innerHTML === clickable[1].innerHTML &&
        clickable[1].innerHTML === clickable[2].innerHTML &&
        clickable[0].innerHTML !== "") ||
      (clickable[3].innerHTML === clickable[4].innerHTML &&
        clickable[4].innerHTML === clickable[5].innerHTML &&
        clickable[3].innerHTML !== "") ||
      (clickable[6].innerHTML === clickable[7].innerHTML &&
        clickable[7].innerHTML === clickable[8].innerHTML &&
        clickable[6].innerHTML !== "") ||
      (clickable[0].innerHTML === clickable[3].innerHTML &&
        clickable[3].innerHTML === clickable[6].innerHTML &&
        clickable[0].innerHTML !== "") ||
      (clickable[1].innerHTML === clickable[4].innerHTML &&
        clickable[4].innerHTML === clickable[7].innerHTML &&
        clickable[1].innerHTML !== "") ||
      (clickable[2].innerHTML === clickable[5].innerHTML &&
        clickable[5].innerHTML === clickable[8].innerHTML &&
        clickable[2].innerHTML !== "") ||
      (clickable[0].innerHTML === clickable[4].innerHTML &&
        clickable[4].innerHTML === clickable[8].innerHTML &&
        clickable[0].innerHTML !== "") ||
      (clickable[2].innerHTML === clickable[4].innerHTML &&
        clickable[4].innerHTML === clickable[6].innerHTML &&
        clickable[2].innerHTML !== "")
    ){
      if(playerMove % 2 == 0){
        Result.innerHTML = "Player2 has Won!!"
        gameOver = true;
      }else{
        Result.innerHTML = "Player1 have won!!";
        gameOver = true;
      }
  }else{
    if(playerMove == clickable.length){
      Result.innerHTML = "It is a Tie!";
    }
  }};
  
  function playerTurn(){
    if(playerMove % 2 == 0){
      turn.innerHTML = "Player 1 Move..";
    }else{
      turn.innerHTML = "Player 2 Move..";
    }
  } 
});

