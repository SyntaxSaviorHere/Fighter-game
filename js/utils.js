const attackSound1 = document.querySelector("#attack-1");
const attackSound2 = document.querySelector("#attack-2");
attackSound1.volume = 0.4;
attackSound2.volume = 0.4;

document.querySelector("#start-game-button").addEventListener("click", () => {
  document.querySelector(".modal2").style.display = "none";
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play();
});

setTimeout(() => {
  const audio = document.getElementById("audio");
  audio.play();
}, 500);

function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x &&
    rectangle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
      rectangle2.position.y &&
    rectangle1.attackBox.position.y <=
      rectangle2.position.y + rectangle2.height &&
    rectangle1.isAttacking
  );
}

//determin winner
function determineWinner({ player, enemy }) {
  clearTimeout(timerId);
  document.querySelector("#displayText").style.display = "flex";
  if (player.health > enemy.health) {
    document.querySelector("#displayText").innerHTML = "Player Wins!";
  }
  if (player.health === enemy.health) {
    document.querySelector("#displayText").innerHTML = "Tie";
  }
  if (player.health < enemy.health) {
    document.querySelector("#displayText").innerHTML = "Enemy Wins!";
  }
}

// Timer
let timer = 60;
let timerId;
function decreaseTimer() {
  timerId = setTimeout(decreaseTimer, 1000);
  if (timer > 0) {
    timer--;
    document.querySelector(".timer").textContent = timer;
  }

  if (timer === 0) {
    determineWinner({ player, enemy });
  }
}
