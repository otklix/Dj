const apps = [
    { id: 'settings', name: 'Настройки', icon: '⚙️', color: '#8e8e93' },
    { id: 'appstore', name: 'App Store', icon: '🅰️', color: '#007aff' },
    { id: 'terminal', name: 'Terminal', icon: '💻', color: '#000' },
    { id: 'camera', name: 'Камера', icon: '📷', color: '#2c2c2e' },
    { id: 'shortcuts', name: 'Команды', icon: '🪄', color: '#5856d6' },
    { id: 'fieldtest', name: 'Field Test', icon: '📡', color: '#4cd964' }
];

function renderSpringboard() {
    const grid = document.getElementById('app-grid');
    const dock = document.getElementById('dock');
    
    grid.innerHTML = apps.map(app => `
        <div class="app-icon" onclick="openApp('${app.id}')">
            <div class="icon" style="background: ${app.color}">${app.icon}</div>
            <span style="color:white; font-size:11px">${app.name}</span>
        </div>
    `).join('');

    dock.innerHTML = apps.slice(0, 4).map(app => `
        <div class="app-icon" onclick="openApp('${app.id}')">
            <div class="icon" style="background: ${app.color}">${app.icon}</div>
        </div>
    `).join('');
}

renderSpringboard();