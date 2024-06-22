let boxes = document.querySelectorAll('.box');
let messages = document.querySelector('.msgContainer');
let msg = document.querySelector('.msg');
let resetGame = document.querySelector('.reset-btn');
let newGame = document.querySelector('.new-btn');
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
    box.addEventListener('click', () => {
        console.log(box);
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        let winner = isWinner()
    })
})

const isWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != '', pos2Val != '', pos3Val != '') {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                winnerIs(pos1Val);
                return true;
            }
        }
    }
}

const winnerIs = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    messages.classList.remove('hide');
    disableBox();
}

const disableBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}

const resetWholeGame = () => {
    turnO = true;
    enableBox();
    messages.classList.add('hide');
}

resetGame.addEventListener('click', resetWholeGame);
newGame.addEventListener('click', resetWholeGame);