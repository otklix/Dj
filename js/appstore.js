// ============================================================
// iOS 18.7 - App Store (полная версия с вкладками)
// ============================================================

let currentTab = 'today';
let installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');

// ---------- ДАННЫЕ ----------
const appStoreApps = [
    { id: 'pages', name: 'Pages', icon: '📄', color: '#ff6b6b', size: '212 MB', category: 'Продуктивность', desc: 'Создавайте документы' },
    { id: 'numbers', name: 'Numbers', icon: '📊', color: '#007aff', size: '189 MB', category: 'Продуктивность', desc: 'Электронные таблицы' },
    { id: 'keynote', name: 'Keynote', icon: '🎯', color: '#ff2d55', size: '234 MB', category: 'Продуктивность', desc: 'Презентации' },
    { id: 'photoshop', name: 'Photoshop', icon: '🎨', color: '#007aff', size: '167 MB', category: 'Фото', desc: 'Редактирование фото' },
    { id: 'word', name: 'Word', icon: '📝', color: '#007aff', size: '456 MB', category: 'Офис', desc: 'Текстовый редактор' },
    { id: 'excel', name: 'Excel', icon: '📊', color: '#28a745', size: '423 MB', category: 'Офис', desc: 'Электронные таблицы' },
    { id: 'maps', name: 'Google Maps', icon: '🗺️', color: '#34c759', size: '189 MB', category: 'Навигация', desc: 'Навигация и карты' },
    { id: 'spotify', name: 'Spotify', icon: '🎵', color: '#1ed760', size: '234 MB', category: 'Музыка', desc: 'Музыкальный стриминг' },
    { id: 'instagram', name: 'Instagram', icon: '📸', color: '#ff6b6b', size: '312 MB', category: 'Соцсети', desc: 'Социальная сеть' },
    { id: 'tiktok', name: 'TikTok', icon: '🎬', color: '#000', size: '345 MB', category: 'Соцсети', desc: 'Короткие видео' },
    { id: 'youtube', name: 'YouTube', icon: '📺', color: '#ff0000', size: '278 MB', category: 'Видео', desc: 'Видеохостинг' },
    { id: 'telegram', name: 'Telegram', icon: '✈️', color: '#0088cc', size: '156 MB', category: 'Соцсети', desc: 'Мессенджер' }
];

// ---------- СЕГОДНЯ (TODAY) ----------
function renderToday(container) {
    container.innerHTML = `
        <div style="padding:0 0 20px 0;">
            <!-- Заголовок -->
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
                <div>
                    <div style="font-size:13px;color:#8e8e93;">${new Date().toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' })}</div>
                    <div style="font-size:28px;font-weight:700;color:#fff;">Сегодня</div>
                </div>
                <div style="font-size:28px;">👤</div>
            </div>

            <!-- Главная карточка -->
            <div style="background:linear-gradient(135deg,#1a472a,#2d6a4f);border-radius:16px;padding:20px;margin-bottom:16px;color:#fff;">
                <div style="font-size:12px;color:rgba(255,255,255,0.7);text-transform:uppercase;letter-spacing:1px;">ЧЕМПИОНАТ МИРА ПО ФУТБОЛУ FIFA</div>
                <div style="font-size:20px;font-weight:700;margin:4px 0 8px;">Все о чемпионате мира — 2026</div>
                <div style="font-size:14px;color:rgba(255,255,255,0.8);">Следите за футбольным турниром с этими приложениями и играми</div>
                <div style="display:flex;gap:12px;margin-top:12px;flex-wrap:wrap;">
                    <span style="background:rgba(255,255,255,0.2);padding:4px 12px;border-radius:12px;font-size:12px;">⚽ FIFA</span>
                    <span style="background:rgba(255,255,255,0.2);padding:4px 12px;border-radius:12px;font-size:12px;">📺 FOX ONE</span>
                    <span style="background:rgba(255,255,255,0.2);padding:4px 12px;border-radius:12px;font-size:12px;">🏆 P:</span>
                </div>
            </div>

            <!-- Рекомендации -->
            <div style="margin-bottom:16px;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                    <div style="font-size:18px;font-weight:600;color:#fff;">Рекомендуем</div>
                    <span style="font-size:13px;color:#007aff;cursor:pointer;">Смотреть все</span>
                </div>
                <div style="display:flex;gap:12px;overflow-x:auto;padding-bottom:8px;">
                    ${appStoreApps.slice(0,4).map(app => `
                        <div style="min-width:120px;background:#2c2c2e;border-radius:12px;padding:12px;text-align:center;">
                            <div style="font-size:36px;">${app.icon}</div>
                            <div style="color:#fff;font-size:13px;font-weight:600;margin-top:4px;">${app.name}</div>
                            <div style="color:#8e8e93;font-size:10px;">${app.category}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- ИИ-помощник -->
            <div style="background:linear-gradient(135deg,#5856d6,#6c5ce7);border-radius:16px;padding:16px;margin-bottom:16px;color:#fff;display:flex;justify-content:space-between;align-items:center;">
                <div>
                    <div style="font-size:12px;opacity:0.7;">РЕКЛАМА</div>
                    <div style="font-size:16px;font-weight:600;">Ваш ИИ-помощник о...</div>
                    <div style="font-size:13px;opacity:0.8;">Google Gemini</div>
                </div>
                <button style="background:rgba(255,255,255,0.2);border:none;color:#fff;padding:6px 16px;border-radius:16px;cursor:pointer;">Обновить</button>
            </div>

            <!-- Нижняя навигация App Store -->
            <div style="display:flex;justify-content:space-around;padding:12px 0;border-top:1px solid rgba(255,255,255,0.08);margin-top:8px;">
                <span onclick="switchAppStoreTab('today')" style="color:${currentTab === 'today' ? '#007aff' : '#8e8e93'};font-size:12px;cursor:pointer;">📱 Сегодня</span>
                <span onclick="switchAppStoreTab('games')" style="color:${currentTab === 'games' ? '#007aff' : '#8e8e93'};font-size:12px;cursor:pointer;">🎮 Игры</span>
                <span onclick="switchAppStoreTab('apps')" style="color:${currentTab === 'apps' ? '#007aff' : '#8e8e93'};font-size:12px;cursor:pointer;">📦 Приложения</span>
                <span onclick="switchAppStoreTab('arcade')" style="color:${currentTab === 'arcade' ? '#007aff' : '#8e8e93'};font-size:12px;cursor:pointer;">🎯 Arcade</span>
                <span onclick="switchAppStoreTab('search')" style="color:${currentTab === 'search' ? '#007aff' : '#8e8e93'};font-size:12px;cursor:pointer;">🔍 Поиск</span>
            </div>
        </div>
    `;
}

// ---------- ИГРЫ (GAMES) ----------
function renderGames(container) {
    const games = [
        { name: 'FIFA 2026', icon: '⚽', color: '#1a472a', size: '2.4 GB' },
        { name: 'Asphalt 9', icon: '🏎️', color: '#ff3b30', size: '1.8 GB' },
        { name: 'Call of Duty', icon: '🎯', color: '#1a1a2e', size: '3.1 GB' },
        { name: 'Minecraft', icon: '⛏️', color: '#4a9e4a', size: '1.2 GB' },
        { name: 'PUBG Mobile', icon: '🔫', color: '#ff9500', size: '2.8 GB' },
        { name: 'Genshin Impact', icon: '🗡️', color: '#007aff', size: '4.2 GB' }
    ];

    container.innerHTML = `
        <div style="padding:0 0 20px 0;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
                <div style="font-size:28px;font-weight:700;color:#fff;">Игры</div>
                <span style="font-size:13px;color:#007aff;cursor:pointer;">Смотреть все</span>
            </div>
            ${games.map(game => `
                <div style="background:#2c2c2e;border-radius:12px;padding:14px;margin-bottom:10px;display:flex;align-items:center;gap:14px;">
                    <div style="width:50px;height:50px;border-radius:12px;background:${game.color};display:flex;align-items:center;justify-content:center;font-size:24px;">${game.icon}</div>
                    <div style="flex:1;">
                        <div style="color:#fff;font-weight:600;">${game.name}</div>
                        <div style="color:#8e8e93;font-size:12px;">${game.size}</div>
                    </div>
                    <button style="background:#007aff;border:none;color:#fff;padding:6px 16px;border-radius:16px;font-weight:600;font-size:12px;cursor:pointer;">📥</button>
                </div>
            `).join('')}
            <!-- Нижняя навигация -->
            <div style="display:flex;justify-content:space-around;padding:12px 0;border-top:1px solid rgba(255,255,255,0.08);margin-top:8px;">
                <span onclick="switchAppStoreTab('today')" style="color:#8e8e93;font-size:12px;cursor:pointer;">📱 Сегодня</span>
                <span onclick="switchAppStoreTab('games')" style="color:#007aff;font-size:12px;cursor:pointer;">🎮 Игры</span>
                <span onclick="switchAppStoreTab('apps')" style="color:#8e8e93;font-size:12px;cursor:pointer;">📦 Приложения</span>
                <span onclick="switchAppStoreTab('arcade')" style="color:#8e8e93;font-size:12px;cursor:pointer;">🎯 Arcade</span>
                <span onclick="switchAppStoreTab('search')" style="color:#8e8e93;font-size:12px;cursor:pointer;">🔍 Поиск</span>
            </div>
        </div>
    `;
}

// ---------- ПРИЛОЖЕНИЯ (APPS) ----------
function renderApps(container) {
    container.innerHTML = `
        <div style="padding:0 0 20px 0;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
                <div style="font-size:28px;font-weight:700;color:#fff;">Приложения</div>
                <span style="font-size:13px;color:#007aff;cursor:pointer;">Смотреть все</span>
            </div>
            ${appStoreApps.map(app => {
                const installed = installedApps.includes(app.id);
                return `
                    <div class="app-card">
                        <div class="app-icon-big" style="background:${app.color};">${app.icon}</div>
                        <div class="app-info">
                            <div class="app-name">${app.name}</div>
                            <div class="app-desc">${app.desc}</div>
                            <div class="app-size">${app.size} • ${app.category}</div>
                        </div>
                        <button class="install-btn ${installed ? 'installed' : ''}" onclick="installApp('${app.id}')">
                            ${installed ? '✅ Открыть' : '📥 Установить'}
                        </button>
                    </div>
                `;
            }).join('')}
            <!-- Нижняя навигация -->
            <div style="display:flex;justify-content:space-around;padding:12px 0;border-top:1px solid rgba(255,255,255,0.08);margin-top:8px;">
                <span onclick="switchAppStoreTab('today')" style="color:#8e8e93;font-size:12px;cursor:pointer;">📱 Сегодня</span>
                <span onclick="switchAppStoreTab('games')" style="color:#8e8e93;font-size:12px;cursor:pointer;">🎮 Игры</span>
                <span onclick="switchAppStoreTab('apps')" style="color:#007aff;font-size:12px;cursor:pointer;">📦 Приложения</span>
                <span onclick="switchAppStoreTab('arcade')" style="color:#8e8e93;font-size:12px;cursor:pointer;">🎯 Arcade</span>
                <span onclick="switchAppStoreTab('search')" style="color:#8e8e93;font-size:12px;cursor:pointer;">🔍 Поиск</span>
            </div>
        </div>
    `;
}

// ---------- ARCADE ----------
function renderArcade(container) {
    container.innerHTML = `
        <div style="padding:40px;text-align:center;color:#8e8e93;">
            <div style="font-size:48px;margin-bottom:16px;">🎯</div>
            <h2 style="color:#fff;">Apple Arcade</h2>
            <p>100+ игр без рекламы и покупок</p>
            <button style="background:#007aff;border:none;color:#fff;padding:12px 32px;border-radius:24px;font-size:16px;font-weight:600;margin-top:16px;cursor:pointer;">Попробовать бесплатно</button>
            <!-- Нижняя навигация -->
            <div style="display:flex;justify-content:space-around;padding:12px 0;border-top:1px solid rgba(255,255,255,0.08);margin-top:40px;">
                <span onclick="switchAppStoreTab('today')" style="color:#8e8e93;font-size:12px;cursor:pointer;">📱 Сегодня</span>
                <span onclick="switchAppStoreTab('games')" style="color:#8e8e93;font-size:12px;cursor:pointer;">🎮 Игры</span>
                <span onclick="switchAppStoreTab('apps')" style="color:#8e8e93;font-size:12px;cursor:pointer;">📦 Приложения</span>
                <span onclick="switchAppStoreTab('arcade')" style="color:#007aff;font-size:12px;cursor:pointer;">🎯 Arcade</span>
                <span onclick="switchAppStoreTab('search')" style="color:#8e8e93;font-size:12px;cursor:pointer;">🔍 Поиск</span>
            </div>
        </div>
    `;
}

// ---------- ПОИСК ----------
function renderSearch(container) {
    container.innerHTML = `
        <div style="padding:0 0 20px 0;">
            <div class="search-bar">
                <span>🔍</span>
                <input type="text" placeholder="Поиск приложений и игр" style="background:transparent;border:none;color:#fff;font-size:16px;width:100%;outline:none;">
            </div>
            <div style="color:#8e8e93;padding:20px;text-align:center;font-size:14px;">
                🔍 Введите запрос для поиска
            </div>
            <!-- Нижняя навигация -->
            <div style="display:flex;justify-content:space-around;padding:12px 0;border-top:1px solid rgba(255,255,255,0.08);margin-top:8px;">
                <span onclick="switchAppStoreTab('today')" style="color:#8e8e93;font-size:12px;cursor:pointer;">📱 Сегодня</span>
                <span onclick="switchAppStoreTab('games')" style="color:#8e8e93;font-size:12px;cursor:pointer;">🎮 Игры</span>
                <span onclick="switchAppStoreTab('apps')" style="color:#8e8e93;font-size:12px;cursor:pointer;">📦 Приложения</span>
                <span onclick="switchAppStoreTab('arcade')" style="color:#8e8e93;font-size:12px;cursor:pointer;">🎯 Arcade</span>
                <span onclick="switchAppStoreTab('search')" style="color:#007aff;font-size:12px;cursor:pointer;">🔍 Поиск</span>
            </div>
        </div>
    `;
}

// ---------- ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК ----------
function switchAppStoreTab(tab) {
    currentTab = tab;
    const container = document.getElementById('app-content');
    if (!container) return;
    
    switch(tab) {
        case 'today': renderToday(container); break;
        case 'games': renderGames(container); break;
        case 'apps': renderApps(container); break;
        case 'arcade': renderArcade(container); break;
        case 'search': renderSearch(container); break;
        default: renderToday(container);
    }
}

// ---------- УСТАНОВКА ПРИЛОЖЕНИЙ ----------
function installApp(appId) {
    if (installedApps.includes(appId)) {
        showToast(`📱 Открываем ${appId}`);
        return;
    }
    
    const app = appStoreApps.find(a => a.id === appId);
    if (!app) return;
    
    showToast(`⏳ Установка ${app.name}...`);
    
    setTimeout(() => {
        installedApps.push(appId);
        localStorage.setItem('installedApps', JSON.stringify(installedApps));
        showToast(`✅ ${app.name} установлено! 🎉`);
        
        // Добавляем иконку на рабочий стол
        addAppIconToHome(app);
        
        // Обновляем список в App Store
        if (currentTab === 'apps') {
            const container = document.getElementById('app-content');
            if (container) renderApps(container);
        }
    }, 1500);
}

function addAppIconToHome(app) {
    const home = document.getElementById('springboard');
    const dock = home?.querySelector('.dock-container');
    
    // Проверяем, есть ли уже такая иконка
    if (home.querySelector(`[data-app="${app.id}"]`)) return;
    
    const icon = document.createElement('div');
    icon.className = 'app-icon';
    icon.dataset.app = app.id;
    icon.innerHTML = `
        <div class="icon" style="background:${app.color};">${app.icon}</div>
        <span class="label">${app.name}</span>
    `;
    icon.addEventListener('click', () => {
        showToast(`📱 Запуск ${app.name}...`);
    });
    
    // Вставляем перед доком
    if (dock) {
        home.insertBefore(icon, dock);
    } else {
        home.appendChild(icon);
    }
}

// ---------- ГЛАВНАЯ ФУНКЦИЯ ----------
function renderAppStore(container) {
    if (!container) {
        container = document.getElementById('app-content');
    }
    if (!container) return;
    
    // Добавляем фон для App Store
    container.style.background = '#1c1c1e';
    
    switchAppStoreTab(currentTab);
}

// Делаем функции глобальными
window.renderAppStore = renderAppStore;
window.installApp = installApp;
window.switchAppStoreTab = switchAppStoreTab;
window.renderToday = renderToday;
window.renderGames = renderGames;
window.renderApps = renderApps;
window.renderArcade = renderArcade;
window.renderSearch = renderSearch;