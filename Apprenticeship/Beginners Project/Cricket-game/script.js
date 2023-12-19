const choices = document.querySelector(".choices"),
  user = document.querySelector(".user-input"),
  computer = document.querySelector(".computer-input"),
  winner = document.querySelector(".winner"),
  player1 = document.querySelector(".player1"),
  player2 = document.querySelector(".player2"),
  reset = document.querySelector(".reset");

let scoreStr = localStorage.getItem("score");
let score = JSON.parse(scoreStr) || {
  Win: 0,
  Loss: 0,
  Tie: 0,
};
const showscore = () => {
  player1.textContent = score.Win;
  player2.textContent = score.Loss;
};
reset.addEventListener("click", () => {
  localStorage.removeItem("score");
  score = {
    Win: 0,
    Loss: 0,
    Tie: 0,
  };
  showscore();
  user.textContent = "";
  computer.textContent = "";
  winner.textContent = "";
});
showscore();

choices.addEventListener("click", (e) => {
  //Your choice
  const userChoice = e.target.classList;
  user.textContent = `You've chosen ${e.target.classList}.`;
  console.log(userChoice.value);

  //Computer's choice
  let computerChoice;
  let randomValue = Math.round(Math.random() * 3);
  if (randomValue === 0) {
    computerChoice = "Bat";
  } else if (randomValue === 1) {
    computerChoice = "Ball";
  } else {
    computerChoice = "Stump";
  }
  computer.textContent = `Computer has chosen ${computerChoice}`;

  //final result
  if (
    (userChoice == "Bat" && computerChoice == "Ball") ||
    (userChoice == "Ball" && computerChoice == "Stump") ||
    (userChoice == "Stump" && computerChoice == "Bat")
  ) {
    winner.textContent = `You've won.`;
    score.Win++;
  } else if (userChoice === computerChoice) {
    winner.textContent = `It's a tie.`;
    score.Tie++;
  } else {
    winner.textContent = `Computer won.`;
    score.Loss++;
  }
  showscore();
  localStorage.setItem("score", JSON.stringify(score));
});
