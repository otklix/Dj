// ===== СОСТОЯНИЕ =====
let state = {
    selectedAction: 'stand_and_wait',
    isConnected: false,
    botStatus: 'offline',
    isAuthorized: false
};

// ===== ЭЛЕМЕНТЫ =====
const elements = {
    statusText: document.getElementById('statusText'),
    dot: document.querySelector('.dot'),
    logContainer: document.getElementById('logContainer'),
    gameLink: document.getElementById('gameLink'),
    playerNick: document.getElementById('playerNick'),
    durationSlider: document.getElementById('durationSlider'),
    durationDisplay: document.getElementById('durationDisplay'),
    executeBtn: document.querySelector('.btn-execute'),
    passwordInput: document.getElementById('botPassword')
};

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
    addLog('system', '🔐 Введите пароль для доступа к боту');
    
    elements.durationSlider.addEventListener('input', function() {
        elements.durationDisplay.textContent = this.value + ' сек';
    });
    
    document.querySelectorAll('.action-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.action-card').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            state.selectedAction = this.dataset.action;
            addLog('info', `📌 Выбрано действие: ${this.querySelector('h3').textContent}`);
        });
    });
    
    document.querySelector('.action-card[data-action="stand_and_wait"]')?.classList.add('active');
});

// ===== ПРОВЕРКА ПАРОЛЯ =====
function checkPassword() {
    const password = elements.passwordInput.value.trim();
    
    if (!password) {
        addLog('error', '❌ Введите пароль!');
        return false;
    }
    
    addLog('info', '🔐 Проверка пароля...');
    return true;
}

// ===== ВЫПОЛНИТЬ ДЕЙСТВИЕ =====
async function executeAction() {
    // 1. Проверяем пароль
    if (!checkPassword()) {
        return;
    }
    
    const password = elements.passwordInput.value.trim();
    const link = elements.gameLink.value.trim();
    const nick = elements.playerNick.value.trim();
    const duration = parseInt(elements.durationSlider.value);
    const action = state.selectedAction;
    
    if (!link) {
        addLog('error', '❌ Вставьте ссылку на игру!');
        return;
    }
    
    if (!nick) {
        addLog('error', '❌ Введите ваш ник в Roblox!');
        return;
    }
    
    addLog('info', `🎯 Выполняю действие "${action}" для ${nick}`);
    addLog('info', `🔐 Пароль проверяется...`);
    
    try {
        const response = await fetch('/api/action', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: action,
                target: nick,
                duration: duration,
                link: link,
                password: password  // ← Отправляем пароль на сервер
            })
        });
        
        const data = await response.json();
        
        if (data.status === 'ok') {
            addLog('success', '✅ Команда выполнена! Пароль верный.');
            updateStatus('online');
        } else if (data.error === 'wrong_password') {
            addLog('error', '❌ НЕВЕРНЫЙ ПАРОЛЬ! Доступ запрещен.');
            updateStatus('offline');
        } else {
            addLog('error', `❌ Ошибка: ${data.message || 'Неизвестная ошибка'}`);
        }
    } catch (error) {
        addLog('error', `❌ Ошибка соединения: ${error.message}`);
    }
}

// ===== ОСТАЛЬНЫЕ ФУНКЦИИ =====
function updateStatus(status) {
    const dot = elements.dot;
    const text = elements.statusText;
    
    if (status === 'online') {
        dot.classList.add('online');
        text.textContent = '✅ Бот онлайн';
        state.botStatus = 'online';
        addLog('success', '🟢 Бот успешно авторизован!');
    } else {
        dot.classList.remove('online');
        text.textContent = '🔒 Бот офлайн';
        state.botStatus = 'offline';
    }
}

function addLog(type, message) {
    const container = elements.logContainer;
    const time = new Date().toLocaleTimeString();
    
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    entry.innerHTML = `
        <span class="time">[${time}]</span>
        <span class="message">${message}</span>
    `;
    
    container.prepend(entry);
    
    while (container.children.length > 50) {
        container.removeChild(container.lastChild);
    }
}

function clearLog() {
    const container = elements.logContainer;
    container.innerHTML = '';
    addLog('system', '🧹 Лог очищен');
}

console.log('🔐 Roblox Bot с защитой паролем v2.0');
console.log('💡 Введите пароль и нажмите "ВЫПОЛНИТЬ"');
