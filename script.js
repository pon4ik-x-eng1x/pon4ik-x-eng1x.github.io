// script.js

let coinCount = 0;

// Функция для обновления количества монет на странице
function updateCoinCount() {
    document.getElementById('coin-count').textContent = coinCount;
}

// Обработчик клика по кнопке кликера
document.getElementById('click-btn').addEventListener('click', function() {
    coinCount++;
    updateCoinCount();
});

// Переключение между кликером и улучшениями
document.getElementById('upgrades-btn').addEventListener('click', function() {
    // Прячем кликер, показываем улучшения
    document.querySelector('.clicker').style.display = 'none';
    document.querySelector('.improvements').innerHTML = `
        <button id="back-btn" class="improvement-btn">Назад</button>
        <p>Здесь будут улучшения</p>
    `;
    
    // Обработчик кнопки "Назад"
    document.getElementById('back-btn').addEventListener('click', function() {
        // Показываем кликер, прячем улучшения
        document.querySelector('.clicker').style.display = 'block';
        document.querySelector('.improvements').innerHTML = `
            <button id="upgrades-btn" class="improvement-btn">Улучшения</button>
        `;
    });
});
