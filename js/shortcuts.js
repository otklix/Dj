// ============================================================
// iOS 18.7 - Быстрые команды
// ============================================================

const defaultShortcuts = [
    { id: 'sc1', name: 'Доброе утро', icon: '🌅', desc: 'Включить свет, погода', action: 'morning' },
    { id: 'sc2', name: 'Спокойной ночи', icon: '🌙', desc: 'Выключить свет, режим сна', action: 'night' },
    { id: 'sc3', name: 'На работу', icon: '💼', desc: 'Открыть календарь, почту', action: 'work' },
    { id: 'sc4', name: 'Тренировка', icon: '🏋️', desc: 'Запустить тренировку', action: 'workout' },
    { id: 'sc5', name: 'Умный дом', icon: '🏠', desc: 'Управление домом', action: 'home' },
    { id: 'sc6', name: 'Найти iPhone', icon: '📱', desc: 'Поиск устройства', action: 'find' }
];

let shortcuts = JSON.parse(localStorage.getItem('shortcuts') || JSON.stringify(defaultShortcuts));

function renderShortcuts(container) {
    let html = `<div class="search-bar"><span>🔍</span><input type="text" id="shortcutSearch" placeholder="Поиск..." oninput="filterShortcuts()"></div>`;
    html += `<div id="shortcutList">`;
    shortcuts.forEach(s => {
        html += `
            <div class="shortcut-card">
                <div class="sc-icon" style="background:#007aff;">${s.icon}</div>
                <div class="sc-info">
                    <div class="sc-name">${s.name}</div>
                    <div class="sc-desc">${s.desc}</div>
                </div>
                <button class="sc-run" onclick="executeShortcut('${s.id}')">▶</button>
            </div>
        `;
    });
    html += `</div>`;
    html += `<div style="background:#2c2c2e;border-radius:12px;padding:14px;text-align:center;color:#007aff;font-weight:600;cursor:pointer;border:2px dashed #3a3a3c;margin-top:10px;" onclick="createShortcut()">+ Создать команду</div>`;
    container.innerHTML = html;
}

function executeShortcut(id) {
    const s = shortcuts.find(sc => sc.id === id);
    if (!s) return;
    
    const actions = {
        morning: () => { showToast('🌅 Доброе утро! Солнечно, 22°'); },
        night: () => { showToast('🌙 Спокойной ночи! Режим сна активирован'); },
        work: () => { showToast('💼 Рабочий день начат'); },
        workout: () => { showToast('🏋️ Тренировка начата!'); },
        home: () => { showToast('🏠 Умный дом: свет включён'); },
        find: () => { showToast('📱 iPhone найден!') }
    };
    
    if (actions[s.action]) {
        actions[s.action]();
    } else {
        showToast(`✅ Выполнено: ${s.name}`);
    }
}

function createShortcut() {
    const name = prompt('Введите название:');
    if (!name) return;
    const icon = prompt('Введите иконку (эмодзи):') || '⚡';
    const desc = prompt('Введите описание:') || 'Моя команда';
    const action = prompt('Введите действие:') || 'custom';
    
    const newSc = { id: 'sc' + Date.now(), name, icon, desc, action };
    shortcuts.push(newSc);
    localStorage.setItem('shortcuts', JSON.stringify(shortcuts));
    showToast(`✅ Команда "${name}" создана!`);
    // Перерендерим, если окно открыто
    const container = document.getElementById('app-content');
    if (container && document.getElementById('app-title')?.innerText === 'SHORTCUTS') {
        renderShortcuts(container);
    }
}

function filterShortcuts() {
    const query = document.getElementById('shortcutSearch')?.value?.toLowerCase() || '';
    const container = document.getElementById('app-content');
    if (!container) return;
    // Перерендерим с фильтром
    let html = `<div class="search-bar"><span>🔍</span><input type="text" id="shortcutSearch" placeholder="Поиск..." oninput="filterShortcuts()" value="${query}"></div>`;
    html += `<div id="shortcutList">`;
    shortcuts.filter(s => s.name.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query)).forEach(s => {
        html += `
            <div class="shortcut-card">
                <div class="sc-icon" style="background:#007aff;">${s.icon}</div>
                <div class="sc-info">
                    <div class="sc-name">${s.name}</div>
                    <div class="sc-desc">${s.desc}</div>
                </div>
                <button class="sc-run" onclick="executeShortcut('${s.id}')">▶</button>
            </div>
        `;
    });
    html += `</div>`;
    html += `<div style="background:#2c2c2e;border-radius:12px;padding:14px;text-align:center;color:#007aff;font-weight:600;cursor:pointer;border:2px dashed #3a3a3c;margin-top:10px;" onclick="createShortcut()">+ Создать команду</div>`;
    container.innerHTML = html;
}