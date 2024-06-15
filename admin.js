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
    // Заглушка для загрузки данных (локальное хранение)
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var adminContent = document.getElementById('admin-content');
    adminContent.innerHTML = '';

    if (users.length === 0) {
        adminContent.innerHTML = '<p>Пользователей пока нет.</p>';
    } else {
        var table = '<table><thead><tr><th>Логин</th><th>Монеты</th><th>Последний раз</th><th>Действия</th></tr></thead><tbody>';
        users.forEach(function(user) {
            table += '<tr>';
            table += '<td>' + user.username + '</td>';
            table += '<td>' + user.coins + '</td>';
            table += '<td>' + user.lastLogin + '</td>';
            table += '<td><button onclick="giveCoins(\'' + user.username + '\')">Выдать монеты</button>';
            table += ' <button onclick="banUser(\'' + user.username + '\')">Забанить</button></td>';
            table += '</tr>';
        });
        table += '</tbody></table>';
        adminContent.innerHTML = table;
    }
}

function giveCoins(username) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var foundUser = users.find(function(user) {
        return user.username === username;
    });

    if (foundUser) {
        // В данном примере увеличим монеты пользователя на 1000
        foundUser.coins += 1000;
        localStorage.setItem('users', JSON.stringify(users));
        fetchUsers(); // Обновляем таблицу
    }
}

function banUser(username) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var foundUser = users.find(function(user) {
        return user.username === username;
    });

    if (foundUser) {
        foundUser.banned = true;
        foundUser.banReason = 'Не указана причина';
        localStorage.setItem('users', JSON.stringify(users));
        fetchUsers(); // Обновляем таблицу
        alert('Пользователь ' + username + ' забанен.');
    }
}
