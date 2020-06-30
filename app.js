
//cached THE DOM == storing something for future use (REUSE) 
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoise(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber] 
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissor"
}

function win(userChoise , computerChoise){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore
    const smallUserWord = "user".fontsize(2).sub();
    const smallCompWord = "comp".fontsize(2).sub();
    result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord} beat ${convertToWord(computerChoise)}${smallCompWord}  YOU WIN ! 😀` ;
}
function lose(userChoise , computerChoise){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore
    const smallUserWord = "user".fontsize(2).sub();
    const smallCompWord = "comp".fontsize(2).sub();
    result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord} loses ${convertToWord(computerChoise)}${smallCompWord}  YOU LOST ! 💩` ;
}

function empate(userChoise , computerChoise){
    const smallUserWord = "user".fontsize(2).sub();
    const smallCompWord = "comp".fontsize(2).sub();
    result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord} equals ${convertToWord(computerChoise)}${smallCompWord}  IT'S A DRAW ! 😜` ;
}

function game(userChoise){
    const computerChoise = getComputerChoise();
    switch(userChoise + computerChoise){
        case "rs":
        case "pr":
        case "sp":
            win(userChoise , computerChoise);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoise , computerChoise);
            break;
        case "rr":
        case "pp":
        case "ss":
            empate(userChoise , computerChoise);
            break;
        
    }      
}

function main(){
    rock_div.addEventListener('click' , function(){
        game("r")
    })
    
    paper_div.addEventListener('click',function(){
        game("p")
    })
    
    scissor_div.addEventListener('click',function(){
        game("s")
    })
}
main();