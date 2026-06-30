// ============================================================
// iOS 18.7 - Обои (Apple Style)
// ============================================================

const wallpapers = [
    // ---------- НОВЫЕ ОБОИ iOS 18.7 (Pearl, Depths, Geometry) ----------
    { 
        id: 'pearl_rose', 
        name: 'Жемчужно-розовый', 
        color: 'linear-gradient(135deg, #ff6b9d, #ff9a76, #fad0c4)',
        category: 'Новые 18.7',
        style: 'pearl'
    },
    { 
        id: 'pearl_gold', 
        name: 'Жемчужно-золотой', 
        color: 'linear-gradient(135deg, #f7971e, #ffd200, #f9d423)',
        category: 'Новые 18.7',
        style: 'pearl'
    },
    { 
        id: 'pearl_blue', 
        name: 'Жемчужно-синий', 
        color: 'linear-gradient(135deg, #00b4db, #0083b0, #00d2ff)',
        category: 'Новые 18.7',
        style: 'pearl'
    },
    { 
        id: 'pearl_violet', 
        name: 'Жемчужно-фиолетовый', 
        color: 'linear-gradient(135deg, #8e44ad, #9b59b6, #a29bfe)',
        category: 'Новые 18.7',
        style: 'pearl'
    },
    { 
        id: 'depths_ocean', 
        name: 'Глубины океана', 
        color: 'linear-gradient(135deg, #0c2340, #1a5276, #2e86c1)',
        category: 'Новые 18.7',
        style: 'depths'
    },
    { 
        id: 'depths_cave', 
        name: 'Глубины пещеры', 
        color: 'linear-gradient(135deg, #1a1a2e, #16213e, #2c3e50)',
        category: 'Новые 18.7',
        style: 'depths'
    },
    { 
        id: 'depths_galaxy', 
        name: 'Глубины галактики', 
        color: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        category: 'Новые 18.7',
        style: 'depths'
    },
    { 
        id: 'geometry_circles', 
        name: 'Геометрия: Круги', 
        color: 'linear-gradient(135deg, #ff6b6b, #ff9a76, #ffd93d)',
        category: 'Новые 18.7',
        style: 'geometry'
    },
    { 
        id: 'geometry_waves', 
        name: 'Геометрия: Волны', 
        color: 'linear-gradient(135deg, #0984e3, #74b9ff, #dfe6e9)',
        category: 'Новые 18.7',
        style: 'geometry'
    },
    { 
        id: 'geometry_hexagons', 
        name: 'Геометрия: Шестиугольники', 
        color: 'linear-gradient(135deg, #00b894, #00cec9, #81ecec)',
        category: 'Новые 18.7',
        style: 'geometry'
    },

    // ---------- ГРАДИЕНТЫ (12 цветов) ----------
    { 
        id: 'gradient_blue', 
        name: 'Синий градиент', 
        color: 'linear-gradient(135deg, #007aff, #5856d6, #5ac8fa)',
        category: 'Градиенты'
    },
    { 
        id: 'gradient_red', 
        name: 'Красный градиент', 
        color: 'linear-gradient(135deg, #ff3b30, #ff2d55, #ff6b6b)',
        category: 'Градиенты'
    },
    { 
        id: 'gradient_green', 
        name: 'Зелёный градиент', 
        color: 'linear-gradient(135deg, #34c759, #28a745, #5ac8fa)',
        category: 'Градиенты'
    },
    { 
        id: 'gradient_purple', 
        name: 'Фиолетовый градиент', 
        color: 'linear-gradient(135deg, #af52de, #8e44ad, #a29bfe)',
        category: 'Градиенты'
    },
    { 
        id: 'gradient_orange', 
        name: 'Оранжевый градиент', 
        color: 'linear-gradient(135deg, #ff9500, #f7971e, #ff9a76)',
        category: 'Градиенты'
    },
    { 
        id: 'gradient_pink', 
        name: 'Розовый градиент', 
        color: 'linear-gradient(135deg, #ff6b9d, #ff9a76, #fad0c4)',
        category: 'Градиенты'
    },
    { 
        id: 'gradient_gold', 
        name: 'Золотой градиент', 
        color: 'linear-gradient(135deg, #f7971e, #ffd200, #f9d423)',
        category: 'Градиенты'
    },
    { 
        id: 'gradient_teal', 
        name: 'Бирюзовый градиент', 
        color: 'linear-gradient(135deg, #00b4db, #0083b0, #00d2ff)',
        category: 'Градиенты'
    },
    { 
        id: 'gradient_lavender', 
        name: 'Лавандовый градиент', 
        color: 'linear-gradient(135deg, #d4a5ff, #b8a9c9, #e8d5f5)',
        category: 'Градиенты'
    },
    { 
        id: 'gradient_mint', 
        name: 'Мятный градиент', 
        color: 'linear-gradient(135deg, #00b894, #00cec9, #81ecec)',
        category: 'Градиенты'
    },
    { 
        id: 'gradient_coral', 
        name: 'Коралловый градиент', 
        color: 'linear-gradient(135deg, #ff6b6b, #ee5a24, #ff9a76)',
        category: 'Градиенты'
    },
    { 
        id: 'gradient_amber', 
        name: 'Янтарный градиент', 
        color: 'linear-gradient(135deg, #f7971e, #ffd200, #f9d423)',
        category: 'Градиенты'
    },

    // ---------- ПРИРОДА ----------
    { 
        id: 'nature_mountains', 
        name: 'Горы в тумане', 
        color: 'linear-gradient(135deg, #2d3436, #636e72, #b2bec3)',
        category: 'Природа'
    },
    { 
        id: 'nature_sunset', 
        name: 'Закат над океаном', 
        color: 'linear-gradient(135deg, #ff6b6b, #ee5a24, #f0932b)',
        category: 'Природа'
    },
    { 
        id: 'nature_forest', 
        name: 'Лес в тумане', 
        color: 'linear-gradient(135deg, #2d3436, #27ae60, #2ecc71)',
        category: 'Природа'
    },
    { 
        id: 'nature_aurora', 
        name: 'Северное сияние', 
        color: 'linear-gradient(135deg, #0c2340, #1a5276, #00d2ff, #2ecc71)',
        category: 'Природа'
    },
    { 
        id: 'nature_ocean', 
        name: 'Океан', 
        color: 'linear-gradient(135deg, #006994, #00b4db, #81ecec)',
        category: 'Природа'
    },
    { 
        id: 'nature_desert', 
        name: 'Пустыня', 
        color: 'linear-gradient(135deg, #f7971e, #ffd200, #f9d423)',
        category: 'Природа'
    },

    // ---------- ГОРОДА ----------
    { 
        id: 'city_nyc', 
        name: 'Нью-Йорк ночью', 
        color: 'linear-gradient(135deg, #0c0c0c, #1a1a2e, #2c3e50)',
        category: 'Города'
    },
    { 
        id: 'city_tokyo', 
        name: 'Токио: Сакура', 
        color: 'linear-gradient(135deg, #ff6b9d, #ff9a76, #f8e1e8)',
        category: 'Города'
    },
    { 
        id: 'city_paris', 
        name: 'Париж: Золотой свет', 
        color: 'linear-gradient(135deg, #f7971e, #ffd200, #f9d423)',
        category: 'Города'
    },
    { 
        id: 'city_london', 
        name: 'Лондон: Туман', 
        color: 'linear-gradient(135deg, #2d3436, #636e72, #b2bec3)',
        category: 'Города'
    },
    { 
        id: 'city_dubai', 
        name: 'Дубай: Панорама', 
        color: 'linear-gradient(135deg, #1a5276, #2e86c1, #74b9ff)',
        category: 'Города'
    },

    // ---------- КОСМОС ----------
    { 
        id: 'space_galaxy', 
        name: 'Спиральная галактика', 
        color: 'linear-gradient(135deg, #000000, #0a0a2e, #6a0572)',
        category: 'Космос'
    },
    { 
        id: 'space_nebula', 
        name: 'Туманность Ориона', 
        color: 'linear-gradient(135deg, #0c0c0c, #1a001a, #3d003d)',
        category: 'Космос'
    },
    { 
        id: 'space_starfield', 
        name: 'Звёздное небо', 
        color: 'linear-gradient(135deg, #000000, #0a0a2e, #1a1a4e)',
        category: 'Космос'
    },
    { 
        id: 'space_milkyway', 
        name: 'Млечный путь', 
        color: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        category: 'Космос'
    },

    // ---------- AOD (Always-On Display) ----------
    { 
        id: 'aod_minimal', 
        name: 'Минимал (AOD)', 
        color: 'linear-gradient(135deg, #000000, #111111, #1a1a1a)',
        category: 'AOD'
    },
    { 
        id: 'aod_contour', 
        name: 'Контур (AOD)', 
        color: 'linear-gradient(135deg, #1a1a1a, #2c2c2e, #3a3a3c)',
        category: 'AOD'
    },
    { 
        id: 'aod_mono', 
        name: 'Монохром (AOD)', 
        color: 'linear-gradient(135deg, #222222, #333333, #444444)',
        category: 'AOD'
    },

    // ---------- ЖИВЫЕ ОБОИ (имитация) ----------
    { 
        id: 'live_weather', 
        name: 'Погода (Live)', 
        color: 'linear-gradient(135deg, #007aff, #5856d6, #5ac8fa)',
        category: 'Живые обои'
    },
    { 
        id: 'live_clock', 
        name: 'Часы (Live)', 
        color: 'linear-gradient(135deg, #1a1a2e, #2c3e50, #4a4a6a)',
        category: 'Живые обои'
    },
    { 
        id: 'live_cosmos', 
        name: 'Космос (Live)', 
        color: 'linear-gradient(135deg, #000000, #0a0a2e, #6a0572)',
        category: 'Живые обои'
    },
    { 
        id: 'live_waves', 
        name: 'Волны (Live)', 
        color: 'linear-gradient(135deg, #006994, #00b4db, #81ecec)',
        category: 'Живые обои'
    },
    { 
        id: 'live_crystals', 
        name: 'Кристаллы (Live)', 
        color: 'linear-gradient(135deg, #6c5ce7, #a29bfe, #fd79a8)',
        category: 'Живые обои'
    },
    { 
        id: 'live_lightloops', 
        name: 'Световые петли (Live)', 
        color: 'linear-gradient(135deg, #ff6b6b, #ee5a24, #f0932b)',
        category: 'Живые обои'
    },
    { 
        id: 'live_lighthouse', 
        name: 'Маяк (Live)', 
        color: 'linear-gradient(135deg, #f7971e, #ffd200, #f9d423)',
        category: 'Живые обои'
    }
];

let selectedWallpaper = localStorage.getItem('selectedWallpaper') || 'gradient_blue';

// ---------- РЕНДЕРИНГ ----------
function renderWallpapers(container) {
    if (!container) {
        container = document.getElementById('app-content');
    }
    if (!container) return;

    const searchBar = document.querySelector('.search-bar input');
    const query = searchBar?.value?.toLowerCase() || '';

    let html = `
        <div class="search-bar">
            <span>🔍</span>
            <input type="text" id="wallpaperSearch" placeholder="Поиск обоев..." oninput="filterWallpapers()">
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px;">
            <span class="category-filter ${!query ? 'active' : ''}" onclick="filterByCategory('all')" style="padding:6px 14px; border-radius:16px; background:${!query ? '#007aff' : '#2c2c2e'}; color:#fff; font-size:12px; cursor:pointer;">Все</span>
            <span class="category-filter" onclick="filterByCategory('Новые 18.7')" style="padding:6px 14px; border-radius:16px; background:#2c2c2e; color:#fff; font-size:12px; cursor:pointer;">Новые 18.7</span>
            <span class="category-filter" onclick="filterByCategory('Градиенты')" style="padding:6px 14px; border-radius:16px; background:#2c2c2e; color:#fff; font-size:12px; cursor:pointer;">Градиенты</span>
            <span class="category-filter" onclick="filterByCategory('Природа')" style="padding:6px 14px; border-radius:16px; background:#2c2c2e; color:#fff; font-size:12px; cursor:pointer;">Природа</span>
            <span class="category-filter" onclick="filterByCategory('Города')" style="padding:6px 14px; border-radius:16px; background:#2c2c2e; color:#fff; font-size:12px; cursor:pointer;">Города</span>
            <span class="category-filter" onclick="filterByCategory('Космос')" style="padding:6px 14px; border-radius:16px; background:#2c2c2e; color:#fff; font-size:12px; cursor:pointer;">Космос</span>
            <span class="category-filter" onclick="filterByCategory('AOD')" style="padding:6px 14px; border-radius:16px; background:#2c2c2e; color:#fff; font-size:12px; cursor:pointer;">AOD</span>
            <span class="category-filter" onclick="filterByCategory('Живые обои')" style="padding:6px 14px; border-radius:16px; background:#2c2c2e; color:#fff; font-size:12px; cursor:pointer;">Живые</span>
        </div>
        <div class="wallpaper-grid" id="wallpaperGrid">
    `;

    const filtered = wallpapers.filter(w => {
        const matchName = w.name.toLowerCase().includes(query);
        const matchCategory = w.category.toLowerCase().includes(query);
        return matchName || matchCategory;
    });

    filtered.forEach(w => {
        const active = selectedWallpaper === w.id ? 'active' : '';
        const categoryBadge = w.category || '';
        html += `
            <div class="wallpaper-item ${active}" onclick="selectWallpaper('${w.id}')">
                <div class="preview" style="background:${w.color};"></div>
                <span class="label">${w.name}</span>
                <span class="category-badge" style="position:absolute;top:4px;right:4px;font-size:7px;background:rgba(0,0,0,0.7);padding:1px 8px;border-radius:8px;color:#8e8e93;">${categoryBadge}</span>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}

// ---------- ФИЛЬТРАЦИЯ ----------
function filterWallpapers() {
    const container = document.getElementById('app-content');
    if (!container) return;
    renderWallpapers(container);
}

function filterByCategory(category) {
    const search = document.getElementById('wallpaperSearch');
    if (!search) return;
    if (category === 'all') {
        search.value = '';
    } else {
        search.value = category;
    }
    filterWallpapers();
}

// ---------- ВЫБОР ОБОЕВ ----------
function selectWallpaper(id) {
    selectedWallpaper = id;
    localStorage.setItem('selectedWallpaper', id);

    const w = wallpapers.find(wp => wp.id === id);
    if (w) {
        document.getElementById('screen').style.background = w.color;
        document.getElementById('screen').style.backgroundImage = 'none';
        showToast(`✅ Обои "${w.name}" установлены`);
    }

    // Обновляем сетку
    const container = document.getElementById('app-content');
    if (container) {
        renderWallpapers(container);
    }
}

// ---------- ИНИЦИАЛИЗАЦИЯ ----------
document.addEventListener('DOMContentLoaded', () => {
    // Применяем сохранённые обои
    const saved = localStorage.getItem('selectedWallpaper');
    if (saved) {
        const w = wallpapers.find(wp => wp.id === saved);
        if (w) {
            document.getElementById('screen').style.background = w.color;
            document.getElementById('screen').style.backgroundImage = 'none';
        }
    }
});