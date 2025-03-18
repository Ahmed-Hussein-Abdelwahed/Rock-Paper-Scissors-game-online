let symbols = document
  .getElementById("symbolsPictures")
  .querySelectorAll("img");

symbols.forEach(function (symbol) {
  symbol.addEventListener("click", handelClick);
});

function handelClick(event) {
  const clickedImg = event.target;
  clickedImg.style.border = "5px solid red";
  document.getElementById("symbolsPictures").style.pointerEvents = "none";
  // disable all events after an image is been clicked (read only mode for that div)
  rollPictures(clickedImg.src);
}

function rollPictures(picture) {
  const pictures = [
    "images/paper.jpeg",
    "images/rock.png",
    "images/scissors.png",
  ];
  let leftPlayer = document.getElementById("leftPlayer").querySelector("img");
  let rightPlayer = document.getElementById("rightPlayer").querySelector("img");

  // changePictures(pictures, leftPlayer, rightPlayer);
  leftPlayer.style.visibility = "hidden";
  rightPlayer.style.visibility = "hidden";

  setTimeout(function () {
    leftPlayer.style.visibility = "visible";
    rightPlayer.style.visibility = "visible";
    choosePicture(pictures, picture, leftPlayer, rightPlayer);
    checkWinner(leftPlayer, rightPlayer);
  }, 100);
}

function checkWinner(player1, player2) {
  let rock = "images/rock.png";
  let paper = "images/paper.jpeg";
  let scissors = "images/scissors.png";
  let result = document.getElementById("result-cont");

  if (player1.src.includes(rock) && player2.src.includes(scissors)) {
    result.innerHTML = "You win!😊"; // rock beats scissors
    result.style.color = "green";
  } else if (player1.src.includes(rock) && player2.src.includes(paper)) {
    result.innerHTML = "You lose"; // paper beats rock
    result.style.color = "red";
  } else if (player1.src.includes(paper) && player2.src.includes(rock)) {
    result.innerHTML = "You win!😊"; // paper beats rock
    result.style.color = "green";
  } else if (player1.src.includes(paper) && player2.src.includes(scissors)) {
    result.innerHTML = "You lose"; // scissors beats paper
    result.style.color = "red";
  } else if (player1.src.includes(scissors) && player2.src.includes(paper)) {
    result.innerHTML = "You win!😊"; // scissors beats paper
    result.style.color = "green";
  } else if (player1.src.includes(scissors) && player2.src.includes(rock)) {
    result.innerHTML = "You lose"; // rock beats scissors
    result.style.color = "red";
  } else if (player1.src === player2.src) {
    result.innerHTML = "Draw";
    result.style.color = "blue";
  }
}

function changePictures(picArr, pic, player1, player2) {
  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

  const repeatedGreetings = async () => {
    await sleep(1000);
    player1.src = picArr[0];
    player2.src = picArr[2];
    await sleep(1000);
    player1.src = picArr[1];
    player2.src = picArr[1];
    await sleep(1000);
    player1.src = picArr[2];
    player2.src = picArr[0];
    await sleep(1000);
    choosePicture(picArr, pic, player1, player2);
  };
  repeatedGreetings();
}

function choosePicture(picArr, pic, player1, player2) {
  player1.src = pic;
  const index = Math.floor(Math.random() * picArr.length);
  player2.src = picArr[index];
}

document.getElementById("resetBtn").onclick = function () {
  location.reload();
};
