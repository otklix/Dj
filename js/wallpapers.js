// ============================================================
// iOS 18.7 - Обои
// ============================================================

const wallpapers = [
    { id: 'gradient_blue', name: 'Синий градиент', color: 'linear-gradient(135deg, #007aff, #5856d6)' },
    { id: 'gradient_red', name: 'Красный градиент', color: 'linear-gradient(135deg, #ff3b30, #ff2d55)' },
    { id: 'gradient_green', name: 'Зелёный градиент', color: 'linear-gradient(135deg, #34c759, #28a745)' },
    { id: 'gradient_purple', name: 'Фиолетовый градиент', color: 'linear-gradient(135deg, #af52de, #8e44ad)' },
    { id: 'gradient_orange', name: 'Оранжевый градиент', color: 'linear-gradient(135deg, #ff9500, #f7971e)' },
    { id: 'gradient_pink', name: 'Розовый градиент', color: 'linear-gradient(135deg, #ff6b9d, #ff9a76)' },
    { id: 'nature_mountains', name: 'Горы', color: 'linear-gradient(135deg, #2d3436, #636e72)' },
    { id: 'nature_sunset', name: 'Закат', color: 'linear-gradient(135deg, #ff6b6b, #ee5a24)' },
    { id: 'nature_forest', name: 'Лес', color: 'linear-gradient(135deg, #2d3436, #27ae60)' },
    { id: 'city_nyc', name: 'Нью-Йорк', color: 'linear-gradient(135deg, #0c0c0c, #1a1a2e)' },
    { id: 'city_tokyo', name: 'Токио', color: 'linear-gradient(135deg, #ff6b9d, #ff9a76)' },
    { id: 'space_galaxy', name: 'Галактика', color: 'linear-gradient(135deg, #000000, #0a0a2e)' },
    { id: 'space_nebula', name: 'Туманность', color: 'linear-gradient(135deg, #0c0c0c, #1a001a)' }
];

let selectedWallpaper = localStorage.getItem('selectedWallpaper') || 'gradient_blue';

function renderWallpapers(container) {
    let html = `<div class="search-bar"><span>🔍</span><input type="text" id="wallpaperSearch" placeholder="Поиск..." oninput="filterWallpapers()"></div>`;
    html += `<div class="wallpaper-grid" id="wallpaperGrid">`;
    wallpapers.forEach(w => {
        const active = selectedWallpaper === w.id ? 'active' : '';
        html += `
            <div class="wallpaper-item ${active}" onclick="selectWallpaper('${w.id}')">
                <div class="preview" style="background:${w.color};"></div>
                <span class="label">${w.name}</span>
            </div>
        `;
    });
    html += `</div>`;
    container.innerHTML = html;
}

function selectWallpaper(id) {
    selectedWallpaper = id;
    localStorage.setItem('selectedWallpaper', id);
    
    const w = wallpapers.find(wp => wp.id === id);
    if (w) {
        document.getElementById('screen').style.background = w.color;
        showToast(`✅ Обои "${w.name}" установлены`);
    }
    
    renderWallpapers(document.getElementById('app-content'));
}

function filterWallpapers() {
    const query = document.getElementById('wallpaperSearch')?.value?.toLowerCase() || '';
    const grid = document.getElementById('wallpaperGrid');
    if (!grid) return;
    
    let html = '';
    wallpapers.filter(w => w.name.toLowerCase().includes(query)).forEach(w => {
        const active = selectedWallpaper === w.id ? 'active' : '';
        html += `
            <div class="wallpaper-item ${active}" onclick="selectWallpaper('${w.id}')">
                <div class="preview" style="background:${w.color};"></div>
                <span class="label">${w.name}</span>
            </div>
        `;
    });
    grid.innerHTML = html;
}