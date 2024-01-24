let secretNum = numGeneration();
let tentativas = 1;
let shoot;
let randomNumList = [];

function showTextScreen(tag, text) {
  let campo = document.querySelector(tag);
  campo.innerHTML = text;
  responsiveVoice.speak(text, "Brazilian Portuguese Female", { rate: 1.2 });
}

showTextScreen("h1", "Jogo do número secreto");
showTextScreen("p", "Escolha um número entre 1 a 10");

function shootVerify() {
  shoot = document.querySelector("input").value;
  if (shoot != "") {
    if (shoot == secretNum) {
      showTextScreen("h1", "Você acertou!!");
      let msgTry = tentativas > 1 ? "tentativas" : "tentativa";
      let showTry = `Você descobriu o número secreto com ${tentativas} ${msgTry}`;
      showTextScreen("p", showTry);
      document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
      if (shoot > secretNum) {
        showTextScreen("p", "O numero secreto é menor!!");
      } else {
        showTextScreen("p", "O numero secreto é maior!!");
      }
    }
  } else {
    showTextScreen("p", "No value");
  }
  tentativas++;
  clearCamp();
}

function numGeneration() {
  return Math.floor(Math.random() * 10 + 1);
}

function restartGame() {
  secretNum = numGeneration();
  tentativas = 1;
  showTextScreen("h1", "Jogo do número secreto");
  showTextScreen("p", "Escolha um número entre 1 a 10");
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

function clearCamp() {
  shoot = document.querySelector("input");
  shoot.value = "";
}
