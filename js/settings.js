// ============================================================
// iOS 18.7 - Системные настройки
// ============================================================

let settingsData = {
    'Основные': [
        { id: 'about', label: 'Об этом устройстве', value: 'iOS 18.7 (22A123)' },
        { id: 'airplane', label: 'Режим полёта', type: 'toggle', value: false },
        { id: 'wifi', label: 'Wi-Fi', value: 'Домашняя сеть' },
        { id: 'bluetooth', label: 'Bluetooth', value: 'Вкл' }
    ],
    'Экран и яркость': [
        { id: 'dark', label: 'Тёмная тема', type: 'toggle', value: false },
        { id: 'truetone', label: 'True Tone', type: 'toggle', value: true },
        { id: 'autorotate', label: 'Автоповорот', type: 'toggle', value: true }
    ],
    'Звук и тактильные': [
        { id: 'volume', label: 'Громкость звонка', value: '80%' },
        { id: 'equalizer', label: 'Эквалайзер', value: 'Поп' }
    ],
    'Конфиденциальность': [
        { id: 'location', label: 'Геолокация', value: 'Всегда' },
        { id: 'camera', label: 'Камера', value: 'При использовании' }
    ],
    'Аккумулятор': [
        { id: 'batterysaver', label: 'Энергосбережение', type: 'toggle', value: false },
        { id: 'chargelimit', label: 'Лимит зарядки', value: '80%' },
        { id: 'cycles', label: 'Циклы зарядки', value: '147' }
    ]
};

function renderSettings(container) {
    let html = '';
    for (const [group, items] of Object.entries(settingsData)) {
        html += `<div class="settings-group">`;
        html += `<div class="group-title">${group}</div>`;
        items.forEach(item => {
            html += `<div class="settings-item">`;
            html += `<div class="left">${item.label}</div>`;
            if (item.type === 'toggle') {
                const isOn = item.value || false;
                html += `<div class="toggle ${isOn ? 'on' : ''}" onclick="toggleSetting(this, '${item.id}')">
                            <div class="thumb"></div>
                        </div>`;
            } else {
                html += `<span class="value">${item.value}</span>`;
                html += `<span class="arrow">›</span>`;
            }
            html += `</div>`;
        });
        html += `</div>`;
    }
    container.innerHTML = html;
}

function toggleSetting(el, id) {
    el.classList.toggle('on');
    const isOn = el.classList.contains('on');
    // Сохраняем в localStorage
    const saved = JSON.parse(localStorage.getItem('settings') || '{}');
    saved[id] = isOn;
    localStorage.setItem('settings', JSON.stringify(saved));
    showToast(isOn ? '✅ Включено' : '❌ Выключено');
}

// Загрузка сохранённых настроек
function loadSettings() {
    const saved = JSON.parse(localStorage.getItem('settings') || '{}');
    for (const [group, items] of Object.entries(settingsData)) {
        items.forEach(item => {
            if (item.type === 'toggle' && saved[item.id] !== undefined) {
                item.value = saved[item.id];
            }
        });
    }
}
loadSettings();