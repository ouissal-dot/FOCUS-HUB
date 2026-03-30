# 🧠 Focus Hub

> An all-in-one productivity dashboard built with vanilla HTML, CSS & JavaScript.

🔗 **Live Demo:** [focus-hub-pearl.vercel.app](https://focus-hub-pearl.vercel.app)

---

## 📸 Preview

![Focus Hub Preview](photos/focushub.png)

---

## ✨ Features

| Tool | Description |
|------|-------------|
| 🧮 **Calculator** | Standard calculator with keyboard support |
| ✅ **To-Do List** | Add, edit, delete & complete tasks with a counter |
| ⏱ **Stopwatch** | Hours, minutes, seconds & centiseconds timer |
| 🎮 **Tic Tac Toe** | Play against the computer (AI random moves) |
| 💱 **Currency Converter** | Real-time exchange rates via ExchangeRate API |
| 🌤 **Weather App** | Live weather data by city via OpenWeatherMap API |
| 🍅 **Pomodoro Timer** | 25-minute focus timer with alarm sound |

---

## 🛠 Built With

- **HTML5** — Semantic structure
- **CSS3** — Responsive design, glassmorphism effects, animations
- **JavaScript (ES6+)** — DOM manipulation, Fetch API, async/await
- **OpenWeatherMap API** — Live weather data
- **ExchangeRate API** — Real-time currency conversion

---

## 📁 Project Structure

```
Focus-Hub/
│
├── index.html           # Home page / dashboard
├── index.css
│
├── calculator.html
├── calculator.css
│
├── todo.html
├── todo.css
│
├── stopwatch.html
├── stopwatch.css
│
├── game.html
├── game.css
│
├── currency.html
├── currency.css
│
├── Weather.html
├── Weather.css
│
├── pamadoro.html
├── pamadoro.css
│
├── focus.js             # Shared JavaScript for all pages
│
└── photos/              # Icons, images & audio assets
```

---

## 🚀 Getting Started

No installation or build step needed — it's pure HTML/CSS/JS.

```bash
# 1. Clone the repository
git clone https://github.com/your-username/focus-hub.git

# 2. Open in your browser
open index.html
```

Or just drag `index.html` into any browser.

---

## 🔑 API Keys

The project uses two free APIs. If you fork this repo, replace the keys in `focus.js`:

```js
// Weather (openweathermap.org — free tier)
const API_KEY = "YOUR_OPENWEATHERMAP_KEY";

// Currency (exchangerate-api.com — free tier)
const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
```



## 🌍 Multilingual Support

The dashboard supports **English 🇬🇧** and **German 🇩🇪**. Switch languages using the toggle in the footer of the home page.

---

## 📱 Responsive Design

All pages are responsive and tested on:
- 📱 Mobile (≤ 600px)
- 💻 Desktop (≥ 768px)

---

## 🗺 Roadmap

- [x] Calculator
- [x] To-Do List
- [x] Stopwatch
- [x] Tic Tac Toe
- [x] Currency Converter
- [x] Weather App
- [x] Pomodoro Timer
- [ ] Dark / Light theme toggle
- [ ] Save tasks to localStorage
- [ ] Pomodoro session history



