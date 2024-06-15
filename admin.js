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
        
        // Загружаем данные (для примера заглушка)
        fetchUsers();
    } else {
        alert('Неверный логин или пароль');
    }
});

function fetchUsers() {
    // Заглушка для загрузки данных (пусто)
    var adminContent = document.getElementById('admin-content');
    adminContent.innerHTML = '<p>Здесь будет список пользователей и их данные.</p>';
}
