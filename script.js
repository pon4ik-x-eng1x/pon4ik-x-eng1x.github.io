// script.js

let coins = localStorage.getItem('coins') ? parseInt(localStorage.getItem('coins')) : 0;
let clickValue = localStorage.getItem('clickValue') ? parseInt(localStorage.getItem('clickValue')) : 1;
let afkValue = localStorage.getItem('afkValue') ? parseInt(localStorage.getItem('afkValue')) : 0;
let clickUpgradeCost = 10;
let afkUpgradeCost = 50;

const coinCountElem = document.getElementById('coin-count');
const clickButtonElem = document.getElementById('click-button');
const clickUpgradeCostElem = document.getElementById('click-upgrade-cost');
const afkUpgradeCostElem = document.getElementById('afk-upgrade-cost');

function updateDisplay() {
    coinCountElem.textContent = coins;
    clickUpgradeCostElem.textContent = clickUpgradeCost;
    afkUpgradeCostElem.textContent = afkUpgradeCost;
}

clickButtonElem.addEventListener('click', () => {
    coins += clickValue;
    localStorage.setItem('coins', coins);
    updateDisplay();
});

document.getElementById('upgrade-click').addEventListener('click', () => {
    if (coins >= clickUpgradeCost) {
        coins -= clickUpgradeCost;
        clickValue += 1;
        clickUpgradeCost *= 2;
        localStorage.setItem('coins', coins);
        localStorage.setItem('clickValue', clickValue);
        updateDisplay();
    }
});

document.getElementById('upgrade-afk').addEventListener('click', () => {
    if (coins >= afkUpgradeCost) {
        coins -= afkUpgradeCost;
        afkValue += 1;
        afkUpgradeCost *= 2;
        localStorage.setItem('coins', coins);
        localStorage.setItem('afkValue', afkValue);
        updateDisplay();
    }
});

function afkEarnings() {
    coins += afkValue;
    localStorage.setItem('coins', coins);
    updateDisplay();
}

setInterval(afkEarnings, 1000);

updateDisplay();
