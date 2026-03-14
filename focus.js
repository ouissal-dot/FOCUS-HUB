/* HOME */

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById("menu-toggle");
    
    
    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            const navLinks = document.querySelector(".language-switcher");
            navLinks.classList.toggle("active");
        });
    }
});

  const transaction =  {
    'en':{
        'big title' : 'Focus Hub',
        'calculator' : 'Calculator',
        'todolist' : 'to do list',
        'stopwatch' : 'Stopwatch',
        'game' : 'Game',
        'currency' : '  Currency Converter',
        'pamadoro' : 'Pamadoro',
    
  },
  'de': { 
    'big title': 'Focus Hub', 
    'calculator': 'Taschenrechner',
    'todolist': 'Aufgabenliste',
    'stopwatch': 'Stoppuhr',
    'game': 'Spiel',
    'currency': 'Währungsrechner',
    'pamadoro': 'Pomodoro' 
}

 } 
function changeLanguage(lang) {
    
    const bigTitle = document.getElementById('big title');
    const calcText = document.getElementById('calculator');
    const todoText = document.getElementById('todolist');
    const stopText = document.getElementById('stopwatch');
    const gameText = document.getElementById('game');
    const currText = document.getElementById('currency');
    const pamaText = document.getElementById('pamadoro');

    
    bigTitle.innerText = transaction[lang]['big title'];
    calcText.innerText = transaction[lang]['calculator'];
    todoText.innerText = transaction[lang]['todolist'];
    stopText.innerText = transaction[lang]['stopwatch'];
    gameText.innerText = transaction[lang]['game'];
    currText.innerText = transaction[lang]['currency'];
    pamaText.innerText = transaction[lang]['pamadoro'];
}




/* calculator */

document.addEventListener('keydown', function(event) {
    const display = document.getElementById('display'); 
    const key = event.key;

    
    if ("0123456789+-*/.".includes(key)) {
        display.value += key;
    }

    // (=)
    if (key === "Enter") {
        event.preventDefault(); 
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

    // (DEL)
    if (key === "Backspace") {
        display.value = display.value.toString().slice(0, -1);
    }

    // "Escape"
    if (key === "Escape") {
        display.value = "";
    }
});


/* stopwatch */
document.addEventListener('DOMContentLoaded', () => {
    
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let Interval; // تعريف المتغير هنا ليكون متاحاً لكل الأزرار

    const appendHours = document.querySelector("#hours");
    const appendMinutes = document.querySelector("#minutes");
    const appendSeconds = document.querySelector("#seconds");
    const appendTens = document.querySelector("#tens");

    const buttonStart = document.querySelector("#startb");
    const buttonStop = document.querySelector("#stopb");
    const buttonReset = document.querySelector("#resetb");

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    buttonStop.onclick = function() {
        clearInterval(Interval);
    };

    buttonReset.onclick = function() {
        clearInterval(Interval);
        
        hours = 0; minutes = 0; seconds = 0; tens = 0;
        appendHours.innerHTML = "00";
        appendMinutes.innerHTML = "00";
        appendSeconds.innerHTML = "00";
        appendTens.innerHTML = "00";
    };

    function startTimer() {
        tens++;

        
        appendTens.innerHTML = tens <= 9 ? "0" + tens : tens;

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = seconds <= 9 ? "0" + seconds : seconds;
            tens = 0;
            appendTens.innerHTML = "00";

            if (seconds > 59) {
                minutes++;
                appendMinutes.innerHTML = minutes <= 9 ? "0" + minutes : minutes;
                seconds = 0;
                appendSeconds.innerHTML = "00";

                if (minutes > 59) {
                    hours++;
                    appendHours.innerHTML = hours <= 9 ? "0" + hours : hours;
                    minutes = 0;
                    appendMinutes.innerHTML = "00";
                }
            }
        }
    }
});
// ... game ...
document.addEventListener('DOMContentLoaded', () => {
const carre = document.querySelectorAll(".carre");
const statusText = document.querySelector(".status");
const resetGame = document.querySelector(".reset");
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let running = false;

function initializeGame(){ 

  carre.forEach(carre => {carre.addEventListener("click", cellClicked )});
  resetGame.addEventListener("click", resetPlay);
  statusText.textContent = ` ${player}'s turn`;
  running = true;

   
};
function cellClicked(){ 
    const cellIndex= this.getAttribute("cellIndex");
    
    if (options[cellIndex] != "" || !running || player !== "X"){ 
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
    if (running && player === "O") {
        setTimeout(computerTurn, 500);
    }

};
function updateCell(carre, index){
    options[index] = player;
    carre.textContent = player;

 };

function computerTurn(){
    if (!running) return;

   
    let availableSpaces = [];
    options.forEach((val, index) => {
        if (val === "") {
            availableSpaces.push(index);
        }
    });
  
    if (availableSpaces.length > 0) {
        const randomIndex = availableSpaces[Math.floor(Math.random() * availableSpaces.length)];
        
    
        const targetCell = document.querySelector(`.carre[cellIndex="${randomIndex}"]`);
        
   
        updateCell(targetCell, randomIndex);
        checkWinner();
    }
       

 };
function checkWinner(){ 
    let roundWon = false;

    
    for (let i = 0; i < winCondition.length; i++) {
        const condition = winCondition[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA == "" || cellB == "" || cellC == "") continue;
        
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `${player} Wins!`;
        running = false;
    } else if (!options.includes("")) {
        statusText.textContent = `Draw!`;
        running = false;
    } else {
        
        player = (player === "X") ? "O" : "X";
        statusText.textContent = `${player}'s turn`;
    }


};
function resetPlay(){ 
    player = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = ` ${player}'s turn`;
    carre.forEach(carre => carre.textContent = "");
    running = true;

};

initializeGame();

});









document.addEventListener('DOMContentLoaded', () => {


const reset = document.getElementById("reset");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const display = document.getElementById("timer");
const alarm = document.getElementById("alarm-sound");


let timeLeft = 1500;
let interval = null;



function  update () {

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  display.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;


};


const startTimer = () => {
  if (interval)  return ;

  interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      update ();
    } else {
      clearInterval(interval);
      alarm.play();
      alert("Time is up!");
    }
  }, 1000);

};

const pauseTimer = () => {
    clearInterval(interval);
    interval = null; 
    alarm.pause();

};


const resetTimer = () => {
    pauseTimer();
    timeLeft = 1500;
    update();

};








start.addEventListener('click', startTimer);
pause.addEventListener('click', pauseTimer);
reset.addEventListener('click', resetTimer);



    });

