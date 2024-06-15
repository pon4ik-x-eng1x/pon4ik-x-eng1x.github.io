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

// Обработчик применения промокода
document.getElementById('promo-btn').addEventListener('click', function() {
    let promoCode = document.getElementById('promo-input').value.trim().toLowerCase();
    if (promoCode === 'your_promo_code_here') { // Замените на свой промокод
        coinCount += 100; // Пример добавления монет за промокод
        updateCoinCount();
        alert('Промокод успешно применен!');
    } else {
        alert('Неверный промокод. Попробуйте еще раз.');
    }
});
