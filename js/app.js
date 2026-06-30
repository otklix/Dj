// Clock
setInterval(() => {
    const now = new Date();
    document.getElementById('clock').innerText = 
        now.getHours() + ":" + String(now.getMinutes()).padStart(2, '0');
}, 1000);

// App Management
function openApp(id) {
    const win = document.getElementById('app-window');
    const content = document.getElementById('app-content');
    const title = document.getElementById('app-title');
    
    win.classList.remove('hidden');
    win.style.animation = 'appOpen 0.4s forwards';
    title.innerText = id.toUpperCase();
    
    // Загрузка специфичного контента
    if(id === 'terminal') renderTerminal(content);
    if(id === 'settings') renderSettings(content);
    if(id === 'appstore') renderAppStore(content);
}

function closeApp() {
    const win = document.getElementById('app-window');
    win.classList.add('hidden');
}

function showToast(text) {
    const t = document.getElementById('toast');
    t.innerText = text;
    t.classList.remove('hidden');
    setTimeout(() => t.classList.add('hidden'), 3000);
}

// Wallpaper Init
document.getElementById('screen').style.backgroundImage = "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe')";