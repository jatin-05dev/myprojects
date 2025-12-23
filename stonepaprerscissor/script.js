let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let msg = document.getElementById("msg")
let click;
let choice;
let userScore = 0;
let compScore = 0;
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


function userchoice() {


    rock.addEventListener("click", () => {

        click = "rock";
        result()



    })

    paper.addEventListener("click", () => {

        click = "paper";
        result()




    })


    scissors.addEventListener("click", () => {

        click = "scissors";

        result()






    })


}

function compchoice() {
    let arr = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * 3);
    choice = arr[rand];
    return choice;

}



function result() {
    let com = compchoice()

    if (click === com) {
        msg.innerHTML = "its draw"
    }
    else {
        let userwin = true;
        if (click === "rock") {
            userwin = com === "paper" ? false : true
        }
        else if (click === "paper") {
            userwin = com === "scissors" ? false : true
        }
        else {
            userwin = com === "rock" ? false : true
        }
        if (userwin) {
            userScore++;
            userScorePara.innerHTML = userScore;
            msg.innerHTML = "congrast you win";
        }
        if (!userwin) {
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerHTML = "you loose"
        }
    }


}
userchoice()