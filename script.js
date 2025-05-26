let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX,playerY
const winPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos1Val == pos2Val && pos2Val == pos3Val) {
            console.log("winner", pos1Val);
            showWinner(pos1Val);

        }
    }
    let allFilled = Array.from(boxes).every(box => box.innerText !== "");
    if (allFilled) {
        msg.innerText = "It's a Draw!";
        msgcontainer.classList.remove("hide");
    }
};
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);