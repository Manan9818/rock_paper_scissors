# 🪨📄✂️ Rock Paper Scissors – JavaScript Console Game

This is a simple console-based **Rock Paper Scissors** game built using **vanilla JavaScript**. The player competes against the computer over 5 rounds, and the scores are tracked and displayed after each round and at the end of the game.

---

## 🕹️ How It Works

- The user is prompted to enter a choice: **Rock**, **Paper**, or **Scissors**.
- The computer randomly picks one of the three options.
- The winner of the round is determined by standard Rock Paper Scissors rules.
- The score is updated and displayed after each round.
- After 5 rounds, a final winner is declared based on the scores.

---


## 🧠 Game Logic Overview

- `getComputerChoice()` – Randomly returns `-1`, `0`, or `1` representing Scissors, Paper, or Rock.
- `getHumanChoice()` – Prompts the player to enter their choice.
- `playRound()` – Compares choices, updates scores, and logs the result.
- A loop runs the game for 5 rounds.

---


## 🚀 Getting Started

### Option 1: Run in Browser
1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Open the browser console (F12) to play the game.

### Option 2: Run in Console (Node.js)
> ⚠️ The `prompt()` function is browser-specific.

To make it work in Node.js, replace `prompt()` with a Node-compatible input method like `readline`.

---


