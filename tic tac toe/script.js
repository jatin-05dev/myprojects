let boxes = document.querySelectorAll(".box");
let res = document.querySelector(".re");
let newGame = document.querySelector("#ne");
let msgcont = document.querySelector(".msgcon");
let msgd = document.querySelector("#msg");

let turnO = true;
// let arr1=["apple","banaya","litchi"];
// let arr2=[["apple","litchi"],["patato","mushroom"],["veg","papaya"]];
const winpatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];
const resetGame = () => {
    trueO = true;
    enabledBoxes();
    msgcont.classList.add("hide");
}
boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;

        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })
});
const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = " ";
    }
}
const showWinner = (winner) => {
    msg.innerText = `congrats,winner is ${winner}`;
    msgcont.classList.remove("hide");
    disabledBoxes();
}
const checkwinner = () => {
    for (let pattern of winpatterns) {
        // console.log( [pattern[0],pattern[1],pattern[2]]);
        // console.log( boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
}
ne.addEventListener("click", resetGame)
re.addEventListener("click", resetGame)