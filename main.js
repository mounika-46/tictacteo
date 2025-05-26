let isXTurn = true;
let board = Array(9).fill(null);
let boxes = document.getElementsByClassName("boxes");
let reset = document.getElementById("reset");
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', async function () {
    if (board[i] !== null) return; // already filled

    const xDiv = this.querySelector('.x');
    const oDiv = this.querySelector('.o');

    if (isXTurn) {
      xDiv.classList.remove('hidden');
      board[i] = 'X';
    } else {
      oDiv.classList.remove('hidden');
      board[i] = 'O';
    }

    if (checkWinner(board[i])) {
      await showWinner(board[i]);
      setTimeout(()=>{
          reset.click();
      },3000);

      return;
    }

    isXTurn = !isXTurn;
  });
}


reset.addEventListener('click', function () {
  for (let box of boxes) {
    const x = box.querySelector('.x');
    const o = box.querySelector('.o');
    const winnerMessage = document.getElementById("winner-message");
    x.classList.add('hidden');
    o.classList.add('hidden');
    winnerMessage.classList.add("hidden");
  }
  board = Array(9).fill(null);
  isXTurn = true;
});

function checkWinner(player) {
  const winCombos = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonals
    [2, 4, 6]
  ];

  for (let combo of winCombos) {
    if (combo.every(index => board[index] === player)) {
      return true;
    }
  }
  return false;
}
function showWinner(winnerChar) {
  const winnerMessage = document.getElementById("winner-message");
  winnerMessage.textContent = `Player ${winnerChar.toUpperCase()} Wins! 🎉`;
  winnerMessage.classList.remove("hidden");
  winnerMessage.classList.remove("animate__bounceInDown");
  void winnerMessage.offsetWidth; // reflow to trigger animation again
  winnerMessage.classList.add("animate__bounceInDown");
}

