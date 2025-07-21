document.addEventListener("DOMContentLoaded", () => {
    let boxes  = document.querySelectorAll(".box");
// let restartBtn = document.querySelector("restart");
// let newGameBtn = document.querySelector("newgame");
let restartBtn = document.getElementById("restart");
let newGameBtn = document.getElementById("newgame");

let message = document.getElementById("message");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.innerText = turnO ? "O" : "X";
    box.disabled = true;
    message.innerText = `Player ${turnO ? "X" : "O"}'s Turn`;
    turnO = !turnO;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      message.innerText = `🎉 Player ${pos1} Wins!`;
      boxes.forEach((box) => box.disabled = true);
      return;
    }
  }

  // Check for draw
  let allFilled = [...boxes].every(box => box.innerText !== "");
  if (allFilled) {
    message.innerText = "It's a Draw!";
  }
}

function resetGame() {
  boxes.forEach(box => {
    box.innerText = "";
    box.disabled = false;
  });
  turnO = true;
  message.innerText = "Player O's Turn";
}

restartBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

});