/* HOME */

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById("menu-toggle");
    
    // Check if it exists before adding the listener
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
    const display = document.getElementById('display'); // Make sure your input has id="display"
    const key = event.key;

    // 1. Numbers and Operators
    if ("0123456789+-*/.".includes(key)) {
        display.value += key;
    }

    // 2. The "Enter" key for Equals (=)
    if (key === "Enter") {
        event.preventDefault(); // Prevents the page from refreshing
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

    // 3. The "Backspace" key for Delete (DEL)
    if (key === "Backspace") {
        display.value = display.value.toString().slice(0, -1);
    }

    // 4. The "Escape" key to Clear everything
    if (key === "Escape") {
        display.value = "";
    }
});



     




