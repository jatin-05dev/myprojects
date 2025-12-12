 let element = document.getElementById("snake");
let leftPos = 0;
let topPos = 0;
let snakeInterval = 0    
let mode = "light";
let direction = "right";
let restart = document.getElementById("restartbtn");
let play = document.getElementById("playground");
let food = document.getElementById("food");
let diplay = document.getElementById("div1");
let s = document.getElementById("btn3");
let score = 0;
let snakeBody = [];

function growSnake() {
  let bodyPart = document.createElement("div");
  bodyPart.classList.add("snake-body");
   if (snakeBody.length > 0) {
    bodyPart.style.left = snakeBody[snakeBody.length - 1].style.left;
    bodyPart.style.top = snakeBody[snakeBody.length - 1].style.top;
  } else {
    bodyPart.style.left = element.style.left;
    bodyPart.style.top = element.style.top;
  }
  play.appendChild(bodyPart);
  snakeBody.push(bodyPart);
}

function placeFoodRandomly() {
  let maxX = play.clientWidth - 30;
  let maxY = play.clientHeight - 30;
  let randomX = Math.floor(Math.random() * (maxX / 30)) * 30;
  let randomY = Math.floor(Math.random() * (maxY / 30)) * 30;
  food.style.left = randomX + "px";
  food.style.top = randomY + "px";
}

function checkCollision() {
  let foodRect = food.getBoundingClientRect();
  let snakeRect = element.getBoundingClientRect();

  if (
    Math.abs(snakeRect.left - foodRect.left) < 30 &&
    Math.abs(snakeRect.top - foodRect.top) < 30
  ) {
    placeFoodRandomly();
    growSnake();
    score++;
  }
}

document.querySelector("#btn1").addEventListener("click", () => {
  let h = document.querySelector("#te");
    let play = document.querySelector("#playground");
  if (mode === "light") {
    document.body.style.backgroundColor = "grey";
    play.style.backgroundColor="black";

    h.style.color = "white";
    mode = "dark";
  } else {
    document.body.style.backgroundColor = "white";
    h.style.color = "black";
    mode = "light";
  }
});

function moveSnakeAuto() {
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i].style.left = snakeBody[i - 1].style.left;
    snakeBody[i].style.top = snakeBody[i - 1].style.top;
  }
  if (snakeBody.length > 0) {
    snakeBody[0].style.left = element.style.left;
    snakeBody[0].style.top = element.style.top;
  }

  if (direction === "right") {
    leftPos += 30;
  } else if (direction === "left") {
    leftPos -= 30;
  } else if (direction === "up") {
    topPos -= 30;
  } else if (direction === "down") {
    topPos += 30;
  }

  element.style.left = leftPos + "px";
  element.style.top = topPos + "px";

  if (
    leftPos < 0 ||
    topPos < 0 ||
    leftPos + element.offsetWidth > play.clientWidth ||
    topPos + element.offsetHeight > play.clientHeight
  ) {
    clearInterval(snakeInterval);
    snakeInterval = null;
    alert("Snake ne takkar maar di!");
  }

  checkCollision();
  s.innerText = "score: " + score;
}

function myStart() {
  if (snakeInterval) return;
  snakeInterval = setInterval(moveSnakeAuto, 100);
  placeFoodRandomly();
  diplay.style.display = "none";
}

restart.addEventListener("click", () => {
  clearInterval(snakeInterval);
  leftPos = 0;
  topPos = 0;
  direction = "right";
  element.style.left = leftPos + "px";
  element.style.top = topPos + "px";
  score = 0;
  snakeBody.forEach(part => part.remove());
  snakeBody = [];
  s.innerText = "score: 0";
  diplay.style.display = "none";
  snakeInterval = setInterval(moveSnakeAuto, 200);
  placeFoodRandomly();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight" && direction !== "left") {
    direction = "right";
  } else if (e.key === "ArrowLeft" && direction !== "right") {
    direction = "left";
  } else if (e.key === "ArrowUp" && direction !== "down") {
    direction = "up";
  } else if (e.key === "ArrowDown" && direction !== "up") {
    direction = "down";
  }
});
 