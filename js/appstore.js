// ============================================================
// iOS 18.7 - App Store
// ============================================================

const appStoreApps = [
    { id: 'com.apple.pages', name: 'Pages', icon: '📄', color: '#ff6b6b', size: '212 MB', category: 'Продуктивность' },
    { id: 'com.apple.numbers', name: 'Numbers', icon: '📊', color: '#007aff', size: '189 MB', category: 'Продуктивность' },
    { id: 'com.apple.keynote', name: 'Keynote', icon: '🎯', color: '#ff2d55', size: '234 MB', category: 'Продуктивность' },
    { id: 'com.adobe.ps', name: 'Photoshop', icon: '🎨', color: '#007aff', size: '167 MB', category: 'Фото' },
    { id: 'com.microsoft.word', name: 'Word', icon: '📝', color: '#007aff', size: '456 MB', category: 'Офис' },
    { id: 'com.microsoft.excel', name: 'Excel', icon: '📊', color: '#28a745', size: '423 MB', category: 'Офис' },
    { id: 'com.google.maps', name: 'Google Maps', icon: '🗺️', color: '#34c759', size: '189 MB', category: 'Навигация' },
    { id: 'com.spotify.music', name: 'Spotify', icon: '🎵', color: '#1ed760', size: '234 MB', category: 'Музыка' },
    { id: 'com.instagram.app', name: 'Instagram', icon: '📸', color: '#ff6b6b', size: '312 MB', category: 'Соцсети' },
    { id: 'com.tiktok.app', name: 'TikTok', icon: '🎬', color: '#000', size: '345 MB', category: 'Соцсети' },
    { id: 'com.youtube.app', name: 'YouTube', icon: '📺', color: '#ff0000', size: '278 MB', category: 'Видео' },
    { id: 'com.telegram.messenger', name: 'Telegram', icon: '✈️', color: '#0088cc', size: '156 MB', category: 'Соцсети' }
];

let installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');

function renderAppStore(container) {
    let html = `
        <div class="search-bar"><span>🔍</span><input type="text" placeholder="Поиск..."></div>
        <div style="background:linear-gradient(135deg,#007aff,#5856d6);border-radius:16px;padding:16px;color:#fff;margin-bottom:16px;">
            <div style="font-size:20px;font-weight:700;">🎉 Новые приложения</div>
            <div style="font-size:13px;opacity:0.8;">Установите лучшие приложения для iOS</div>
        </div>
    `;
    
    appStoreApps.forEach(app => {
        const installed = installedApps.includes(app.id);
        html += `
            <div class="app-card">
                <div class="app-icon-big" style="background:${app.color};">${app.icon}</div>
                <div class="app-info">
                    <div class="app-name">${app.name}</div>
                    <div class="app-desc">${app.category}</div>
                    <div class="app-size">${app.size}</div>
                </div>
                <button class="install-btn ${installed ? 'installed' : ''}" onclick="installApp('${app.id}')">
                    ${installed ? '✅ Открыть' : '📥 Установить'}
                </button>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function installApp(appId) {
    if (installedApps.includes(appId)) {
        showToast('📱 Приложение уже установлено');
        return;
    }
    
    const app = appStoreApps.find(a => a.id === appId);
    if (!app) return;
    
    showToast(`⏳ Загрузка ${app.name}...`);
    installedApps.push(appId);
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
    
    // Добавляем иконку на рабочий стол
    addAppIcon(appId, app.name, app.icon, app.color);
    
    setTimeout(() => {
        showToast(`✅ ${app.name} установлено! 🎉`);
        const container = document.getElementById('app-content');
        if (container && document.getElementById('app-title')?.innerText === 'APPSTORE') {
            renderAppStore(container);
        }
    }, 1500);
}