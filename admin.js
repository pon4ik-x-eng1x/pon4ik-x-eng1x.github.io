// admin.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Проверка логина и пароля (для примера просто хардкод)
    if (username === 'pon4ikisdonut' && password === '177695pontyar') {
        // Очищаем форму
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        
        // Показываем панель управления
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
    } else {
        alert('Неверный логин или пароль');
    }
});

document.getElementById('list-users-btn').addEventListener('click', function() {
    // Здесь можно добавить логику для отображения списка пользователей
    alert('Функция "Список пользователей" ещё не реализована.');
});

document.getElementById('grant-coins-btn').addEventListener('click', function() {
    // Здесь можно добавить логику для выдачи монет пользователям
    alert('Функция "Выдать монеты" ещё не реализована.');
});

document.getElementById('revoke-coins-btn').addEventListener('click', function() {
    // Здесь можно добавить логику для снятия монет у пользователей
    alert('Функция "Забрать монеты" ещё не реализована.');
});

document.getElementById('ban-user-btn').addEventListener('click', function() {
    // Здесь можно добавить логику для блокировки пользователя
    alert('Функция "Заблокировать пользователя" ещё не реализована.');
});

document.getElementById('unban-user-btn').addEventListener('click', function() {
    // Здесь можно добавить логику для разблокировки пользователя
    alert('Функция "Разблокировать пользователя" ещё не реализована.');
});

document.getElementById('logout-btn').addEventListener('click', function() {
    // Выход из административной панели
    document.getElementById('admin-panel').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});
