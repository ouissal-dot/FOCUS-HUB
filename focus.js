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
        // إعادة المتغيرات لأرقام وليس نصوص لتجنب الأخطاء الحسابية لاحقاً
        hours = 0; minutes = 0; seconds = 0; tens = 0;
        appendHours.innerHTML = "00";
        appendMinutes.innerHTML = "00";
        appendSeconds.innerHTML = "00";
        appendTens.innerHTML = "00";
    };

    function startTimer() {
        tens++;

        // تنسيق أجزاء الثانية
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



