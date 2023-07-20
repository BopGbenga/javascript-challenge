// document.querySelector(".number").textContent = 34;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);
  // NO input
  if (!guess) {
    document.querySelector(".container").style.backgroundColor =
      " rgba(255, 0, 0, 0.448";

    console.log(
      (document.querySelector(".think").textContent =
        "⛔ PLEASE SELECT A NUMBER")
    );

    //when guess is coreect
  } else if (guess === secretNumber) {
    document.querySelector(".think").textContent = "🥳🥳🥳🥳 COREECT NUMBER";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".container").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "20%";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //when guess is wrong
  else if (guess !== secretNumber) {
    document.querySelector(".container").style.backgroundColor = "#222";
    if (score > 1) {
      document.querySelector(".think").textContent =
        guess > secretNumber ? "📉 TOO HIGH" : "📉 TOO LOW!!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".container").style.backgroundColor = "red";
      document.querySelector(".think").textContent =
        "😢YOU LOST THE GAME!!!! TRY AGAIN";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".think").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";

  document.querySelector(".container").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "10%";
});
