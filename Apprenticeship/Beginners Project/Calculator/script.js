const btnClicked = document.querySelector(".buttons");
const screen = document.querySelector(".screen");

btnClicked.addEventListener("click", (e) => {
  if (!e.target.classList.contains("special")) {
    screen.value += e.target.value;
  }
  if (e.target.value == "AC") {
    screen.value = "";
  }
  if (e.target.value == "C") {
    let cl = screen.value.slice(0, -1);
    screen.value = cl;
  }
  if (e.target.value == "=") {
    if (screen.value !== "") {
      screen.value = eval(screen.value);
    }
  }
});
