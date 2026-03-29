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

    if (key === "Enter") {
        event.preventDefault(); 
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

    
    if (key === "Backspace") {
        display.value = display.value.toString().slice(0, -1);
    }

   
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
    let Interval; 

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









// ... pamadoro ...

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



  
// ... currency ...
document.addEventListener('DOMContentLoaded', () => {


const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from');
const toCurrency = document.getElementById('to-currency');
const convertBtn = document.getElementById('convert-btn');
const resultBox = document.getElementById('result-box');









async function convertCurrency() {
    const amount = amountInput.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (amount === "" || amount <= 0) {
        resultBox.innerHTML = `<span class="result-empty">Please enter a valid amount</span>`;
        return;
    }

    resultBox.innerHTML = `<span class="result-empty">Converting...</span>`;

    try {
        
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
        const data = await response.json();
        
        const rate = data.rates[to];
        const convertedAmount = (amount * rate).toFixed(2);

        
        resultBox.innerHTML = `
            <div style="color: #fff; font-size: 1.2rem; font-weight: bold;">
                ${amount} ${from} = ${convertedAmount} ${to}
            </div>
        `;
        
        
        fromCurrency.classList.add('selected-active');
        toCurrency.classList.add('selected-active');

    } catch (error) {
        resultBox.innerHTML = `<span class="result-empty">Error fetching rates. Try again.</span>`;
        console.error("Exchange rate error:", error);
    }
}


convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    convertCurrency();
});


[fromCurrency, toCurrency].forEach(select => {
    select.addEventListener('change', convertCurrency);
});







})

<<<<<<< HEAD


=======
 });
>>>>>>> feature/weatherapp







// ... WEATHER ...

document.addEventListener('DOMContentLoaded', () => {


const API_KEY = "9b4423adba00e6e8366ae97840b3c1ed";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";


 const input     = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar img");
const weatherIcon  = document.querySelector(".weather-icon");
const tempEl       = document.querySelector(".temp");
const cityEl       = document.querySelector(".city");
const humidityEl   = document.querySelector(".detail-item:nth-child(1) .detail-value");
const windEl       = document.querySelector(".detail-item:nth-child(2) .detail-value");








function getWeatherEmoji(conditionCode) {
  if (conditionCode >= 200 && conditionCode < 300) return "⛈️";       
  if (conditionCode >= 300 && conditionCode < 400) return "🌦️";        
  if (conditionCode >= 500 && conditionCode < 600) return "🌧️";   

  if (conditionCode >= 600 && conditionCode < 700) return "❄️";      
  if (conditionCode >= 700 && conditionCode < 800) return "🌫️";  

  if (conditionCode === 800)                        return "☀️";   

  if (conditionCode === 801)                        return "🌤️";         
  if (conditionCode === 802)                        return "⛅";          
  if (conditionCode >= 803)                         return "☁️";         
  return "⛅🌧️";
}



function setLoading(on) {
  if (on) {
    weatherIcon.textContent = "⏳";
    tempEl.textContent      = "--°c";
    cityEl.textContent      = "Loading...";
    humidityEl.textContent  = "--%";
    windEl.textContent      = "-- km/h";
  }
}

   function setError(message) {
    weatherIcon.textContent = "❓";
    tempEl.textContent      = "--°c";
    cityEl.textContent      = message;
    humidityEl.textContent  = "--%";
    windEl.textContent      = "-- km/h";
  }

async function fetchWeather(city) {
  if (!city.trim()) return;
 
  setLoading(true);
 
  try {
    const response = await fetch(
      `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );
 
    if (response.status === 404) {
      setError("City not found");
      return;
    }
 
    if (response.status === 401) {
      setError("Invalid API key");
      return;
    }
 
    if (!response.ok) {
      setError("Something went wrong");
      return;
    }
 
    const data = await response.json();
    updateUI(data);
 
  } catch (error) {
    setError("Network error");
    console.error("Weather fetch error:", error);
  }
}
 

function updateUI(data) {
  const temp      = Math.round(data.main.temp);
  const city      = data.name;
  const humidity  = data.main.humidity;
  const windSpeed = (data.wind.speed * 3.6).toFixed(2); 
  const condCode  = data.weather[0].id;
 
  weatherIcon.textContent = getWeatherEmoji(condCode);
  tempEl.textContent      = `${temp}°c`;
  cityEl.textContent      = city;
  humidityEl.textContent  = `${humidity}%`;
  windEl.textContent      = `${windSpeed} km/h`;
}
 

 

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    fetchWeather(input.value);
  }
});
 

searchBtn.addEventListener("click", () => {
  fetchWeather(input.value);
});
 

<<<<<<< HEAD
fetchWeather(input.value || "Germany");
=======
fetchWeather(input.value || "germany");






 });





































 // ... todolist ...

document.addEventListener('DOMContentLoaded', () => {



let tasks = [];
let selectedIndex = null;


const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");


function addTask() {
  const taskText = inputBox.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  tasks.push({ text: taskText, completed: false });
  inputBox.value = "";
  selectedIndex = null;
  renderList();
}


inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});


function deleteTask(index) {
  tasks.splice(index, 1);
  if (selectedIndex === index) selectedIndex = null;
  renderList();
}


function editTask(index) {
  const newText = prompt("Edit your task:", tasks[index].text);
  if (newText === null) return;         // cancelled
  if (newText.trim() === "") {
    alert("Task cannot be empty.");
    return;
  }
  tasks[index].text = newText.trim();
  renderList();
}


function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderList();
}


function selectTask(index) {
  selectedIndex = selectedIndex === index ? null : index;
  renderList();
}


function updateCounters() {
  const completed = tasks.filter((t) => t.completed).length;
  const uncompleted = tasks.length - completed;
  completedCounter.textContent = completed;
  uncompletedCounter.textContent = uncompleted;
}


function renderList() {
  listContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    
    if (index === selectedIndex) li.classList.add("selected");

    
    if (task.completed) li.classList.add("completed");

    
    li.addEventListener("click", function (e) {
      
      if (
        e.target.classList.contains("delete-btn") ||
        e.target.classList.contains("edit-btn") ||
        e.target.type === "checkbox"
      ) return;
      selectTask(index);
    });

    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleComplete(index));

   
    const label = document.createElement("label");
    const span = document.createElement("span");
    span.textContent = task.text;
    label.appendChild(checkbox);
    label.appendChild(span);

    
    const editBtn = document.createElement("span");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => editTask(index));

   
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => deleteTask(index));

    li.appendChild(label);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    listContainer.appendChild(li);
  });

  updateCounters();
}


renderList();




 });

















>>>>>>> feature/weatherapp





















<<<<<<< HEAD
})
=======
>>>>>>> feature/weatherapp
