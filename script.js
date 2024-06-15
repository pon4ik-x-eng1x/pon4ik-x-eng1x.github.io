// script.js

let coins = localStorage.getItem('coins') ? parseInt(localStorage.getItem('coins')) : 0;
let energy = localStorage.getItem('energy') ? parseInt(localStorage.getItem('energy')) : 100;
let clickValue = localStorage.getItem('clickValue') ? parseInt(localStorage.getItem('clickValue')) : 1;
let afkValue = localStorage.getItem('afkValue') ? parseInt(localStorage.getItem('afkValue')) : 0;
let clickUpgradeCost = localStorage.getItem('clickUpgradeCost') ? parseInt(localStorage.getItem('clickUpgradeCost')) : 10;
let afkUpgradeCost = localStorage.getItem('afkUpgradeCost') ? parseInt(localStorage.getItem('afkUpgradeCost')) : 50;
let banned = localStorage.getItem('banned') === 'true';
let banReason = localStorage.getItem('banReason');

const coinCountElem = document.getElementById('coin-count');
const energyCountElem = document.getElementById('energy-count');
const clickButtonElem = document.getElementById('click-button');
const clickUpgradeCostElem = document.getElementById('click-upgrade-cost');
const afkUpgradeCostElem = document.getElementById('afk-upgrade-cost');
const buttonImgElem = document.getElementById('button-img');

const buttonImages = [
    { threshold: 0, src: "images/0.jpg" },
    { threshold: 1000, src: "images/1000.jpg" },
    { threshold: 10000, src: "images/10000.jpg" },
    { threshold: 50000, src: "images/50000.jpg" },
    { threshold: 100000, src: "images/100000.jpg" },
    { threshold: 500000, src: "images/500000.jpg" },
    { threshold: 1000000, src: "images/1000000.jpg" },
    { threshold: 1500000, src: "images/1500000.jpg" },
    { threshold: 2000000, src: "images/2000000.jpg" },
];

function updateDisplay() {
    coinCountElem.textContent = coins;
    energyCountElem.textContent = energy;
    clickUpgradeCostElem.textContent = clickUpgradeCost;
    afkUpgradeCostElem.textContent = afkUpgradeCost;
    updateButtonImage();
}

function updateButtonImage() {
    for (let i = buttonImages.length - 1; i >= 0; i--) {
        if (coins >= buttonImages[i].threshold) {
            buttonImgElem.src = buttonImages[i].src;
            break;
        }
    }
}

if (banned) {
    document.body.innerHTML = `<h1>Вы забанены</h1><p>${banReason}</p>`;
} else {
    clickButtonElem.addEventListener('click', () => {
        if (energy > 0) {
            coins += clickValue;
            energy -= 1;
            localStorage.setItem('coins', coins);
            localStorage.setItem('energy', energy);
            updateDisplay();
        }
    });

    document.getElementById('upgrade-click').addEventListener('click', () => {
        if (coins >= clickUpgradeCost) {
            coins -= clickUpgradeCost;
            clickValue += 1;
            clickUpgradeCost *= 2;
            localStorage.setItem('coins', coins);
            localStorage.setItem('clickValue', clickValue);
            localStorage.setItem('clickUpgradeCost', clickUpgradeCost);
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
            localStorage.setItem('afkUpgradeCost', afkUpgradeCost);
            updateDisplay();
        }
    });

    function afkEarnings() {
        coins += afkValue;
        energy = Math.min(energy + 1, 100);
        localStorage.setItem('coins', coins);
        localStorage.setItem('energy', energy);
        updateDisplay();
    }

    function openTab(evt, tabName) {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab-link");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    setInterval(afkEarnings, 1000);

    updateDisplay();
}
