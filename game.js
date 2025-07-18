// game.js

let currentLevel = parseInt(new URLSearchParams(window.location.search).get("level") || "1");
document.querySelector("h1").textContent = `文字レベルチェック（Lv${currentLevel}）`;

const MAX_LEVEL = 7;
const PAIR_COUNT = 10;
const TIME_LIMIT = 120;

let timeLeft = TIME_LIMIT;
let timerInterval;
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchCount = 0;

const gameBoard = document.getElementById("gameBoard");
const timerDisplay = document.getElementById("timeLeft");

const allPairs = getLevelQuestions(currentLevel);
if (allPairs.length < PAIR_COUNT) {
  alert("このレベルの問題が不足しています。");
  window.location.href = "index.html";
}

const selectedPairs = shuffleArray(allPairs).slice(0, PAIR_COUNT);

let cardItems = [];
selectedPairs.forEach(pair => {
  cardItems.push({ type: "romaji", value: pair.q, match: pair.a });
  cardItems.push({ type: "kana", value: pair.a, match: pair.q });
});

cardItems = shuffleArray(cardItems);

cardItems.forEach((item, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.value = item.value;
  card.dataset.match = item.match;
  card.dataset.index = index;
  card.textContent = "？";
  card.addEventListener("click", flipCard);
  gameBoard.appendChild(card);
});

timerInterval = setInterval(() => {
  timeLeft--;
  timerDisplay.textContent = timeLeft;
  if (timeLeft <= 0) {
    endGame(false);
  }
}, 1000);

function flipCard(e) {
  if (lockBoard) return;
  const clicked = e.currentTarget;
  if (clicked.classList.contains("flipped") || clicked.classList.contains("matched")) return;

  clicked.classList.add("flipped");
  clicked.textContent = clicked.dataset.value;

  if (!firstCard) {
    firstCard = clicked;
  } else {
    secondCard = clicked;
    checkMatch();
  }
}

function checkMatch() {
  const isMatch = firstCard.dataset.match === secondCard.dataset.value;

  if (isMatch) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    matchCount++;
    resetFlips();

    if (matchCount === PAIR_COUNT) {
      clearInterval(timerInterval);
      setTimeout(() => {
        if (currentLevel < MAX_LEVEL) {
          nextLevel();
        } else {
          endGame(true); // 最終レベルクリア
        }
      }, 1000);
    }
  } else {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      firstCard.textContent = "？";
      secondCard.textContent = "？";
      resetFlips();
    }, 800);
  }
}

function resetFlips() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function endGame(success) {
  clearInterval(timerInterval);
  localStorage.setItem("finalLevel", currentLevel);
  localStorage.setItem("matchCount", matchCount);
  localStorage.setItem("success", success ? "1" : "0");

  // Google Sheets 送信
  fetch("https://script.google.com/macros/s/AKfycbwHLsimh2w1KSAWPjIjox7Wz0m1P0cd8fXK3_9ek2lNrVM4-d6ielpfKTrk-BRTZ_ItZA/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      level: currentLevel,
      score: matchCount,
      ua: navigator.userAgent,
    　lang: navigator.language
    })
  });

  window.location.href = "gameover.html";
}

function nextLevel() {
  window.location.href = `game.html?level=${currentLevel + 1}`;
}

function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
