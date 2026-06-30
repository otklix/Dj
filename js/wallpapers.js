// ============================================================
// iOS 18.7 - Все обои (iOS 18 + macOS 15)
// Официальные обои из релиза Apple
// Источник: 4PDA, Yablyk
// ============================================================

const wallpapers = [
    // ============================================================
    // 1. НОВЫЕ ОБОИ iOS 18 (из официального релиза)
    // ============================================================
    
    // ---------- ПЕРЛАМУТР (Pearl) ----------
    {
        id: 'ios18_pearl_rose',
        name: 'Жемчужная роза',
        color: 'linear-gradient(135deg, #ff6b9d, #ff9a76, #fad0c4)',
        category: 'iOS 18 · Перламутр',
        preview: '🌹'
    },
    {
        id: 'ios18_pearl_gold',
        name: 'Жемчужное золото',
        color: 'linear-gradient(135deg, #f7971e, #ffd200, #f9d423)',
        category: 'iOS 18 · Перламутр',
        preview: '✨'
    },
    {
        id: 'ios18_pearl_blue',
        name: 'Жемчужная синева',
        color: 'linear-gradient(135deg, #00b4db, #0083b0, #00d2ff)',
        category: 'iOS 18 · Перламутр',
        preview: '💎'
    },
    {
        id: 'ios18_pearl_violet',
        name: 'Жемчужный фиолет',
        color: 'linear-gradient(135deg, #8e44ad, #9b59b6, #a29bfe)',
        category: 'iOS 18 · Перламутр',
        preview: '🔮'
    },
    {
        id: 'ios18_pearl_green',
        name: 'Жемчужный изумруд',
        color: 'linear-gradient(135deg, #00b894, #00cec9, #81ecec)',
        category: 'iOS 18 · Перламутр',
        preview: '💚'
    },
    {
        id: 'ios18_pearl_coral',
        name: 'Жемчужный коралл',
        color: 'linear-gradient(135deg, #ff6b6b, #ee5a24, #ff9a76)',
        category: 'iOS 18 · Перламутр',
        preview: '🪸'
    },
    {
        id: 'ios18_pearl_amber',
        name: 'Жемчужный янтарь',
        color: 'linear-gradient(135deg, #f7971e, #ffd200, #f9d423)',
        category: 'iOS 18 · Перламутр',
        preview: '🧡'
    },
    {
        id: 'ios18_pearl_lavender',
        name: 'Жемчужная лаванда',
        color: 'linear-gradient(135deg, #d4a5ff, #b8a9c9, #e8d5f5)',
        category: 'iOS 18 · Перламутр',
        preview: '💜'
    },

    // ---------- ГЛУБИНЫ (Depths) ----------
    {
        id: 'ios18_depths_ocean',
        name: 'Глубины океана',
        color: 'linear-gradient(135deg, #0c2340, #1a5276, #2e86c1)',
        category: 'iOS 18 · Глубины',
        preview: '🌊'
    },
    {
        id: 'ios18_depths_cave',
        name: 'Глубины пещеры',
        color: 'linear-gradient(135deg, #1a1a2e, #16213e, #2c3e50)',
        category: 'iOS 18 · Глубины',
        preview: '🕳️'
    },
    {
        id: 'ios18_depths_galaxy',
        name: 'Глубины галактики',
        color: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        category: 'iOS 18 · Глубины',
        preview: '🌌'
    },
    {
        id: 'ios18_depths_abyss',
        name: 'Глубины бездны',
        color: 'linear-gradient(135deg, #000000, #0a0a2e, #1a1a4e)',
        category: 'iOS 18 · Глубины',
        preview: '🕳️'
    },
    {
        id: 'ios18_depths_nebula',
        name: 'Глубины туманности',
        color: 'linear-gradient(135deg, #1a001a, #3d003d, #6a006a)',
        category: 'iOS 18 · Глубины',
        preview: '🌌'
    },

    // ---------- ГЕОМЕТРИЯ (Geometry) ----------
    {
        id: 'ios18_geometry_circles',
        name: 'Геометрия: Круги',
        color: 'linear-gradient(135deg, #ff6b6b, #ff9a76, #ffd93d)',
        category: 'iOS 18 · Геометрия',
        preview: '⭕'
    },
    {
        id: 'ios18_geometry_waves',
        name: 'Геометрия: Волны',
        color: 'linear-gradient(135deg, #0984e3, #74b9ff, #dfe6e9)',
        category: 'iOS 18 · Геометрия',
        preview: '〰️'
    },
    {
        id: 'ios18_geometry_hexagons',
        name: 'Геометрия: Шестиугольники',
        color: 'linear-gradient(135deg, #00b894, #00cec9, #81ecec)',
        category: 'iOS 18 · Геометрия',
        preview: '⬡'
    },
    {
        id: 'ios18_geometry_chevrons',
        name: 'Геометрия: Шевроны',
        color: 'linear-gradient(135deg, #6c5ce7, #a29bfe, #fd79a8)',
        category: 'iOS 18 · Геометрия',
        preview: '⌃⌄'
    },
    {
        id: 'ios18_geometry_spirals',
        name: 'Геометрия: Спирали',
        color: 'linear-gradient(135deg, #6a0572, #ab83a1, #f8e1e8)',
        category: 'iOS 18 · Геометрия',
        preview: '🌀'
    },
    {
        id: 'ios18_geometry_squares',
        name: 'Геометрия: Квадраты',
        color: 'linear-gradient(135deg, #2d3436, #636e72, #b2bec3)',
        category: 'iOS 18 · Геометрия',
        preview: '▢'
    },
    {
        id: 'ios18_geometry_triangles',
        name: 'Геометрия: Треугольники',
        color: 'linear-gradient(135deg, #ff9500, #f7971e, #ff9a76)',
        category: 'iOS 18 · Геометрия',
        preview: '△'
    },

    // ============================================================
    // 2. ОБОИ macOS 15
    // ============================================================
    {
        id: 'macos15_sequoia',
        name: 'Секвойя',
        color: 'linear-gradient(135deg, #1a472a, #2d6a4f, #40916c)',
        category: 'macOS 15',
        preview: '🌲'
    },
    {
        id: 'macos15_sunset',
        name: 'Закат в горах',
        color: 'linear-gradient(135deg, #ff6b6b, #ee5a24, #f0932b)',
        category: 'macOS 15',
        preview: '🌅'
    },
    {
        id: 'macos15_night',
        name: 'Ночное небо',
        color: 'linear-gradient(135deg, #0c0c0c, #1a1a2e, #2c3e50)',
        category: 'macOS 15',
        preview: '🌙'
    },
    {
        id: 'macos15_forest',
        name: 'Лес в тумане',
        color: 'linear-gradient(135deg, #2d3436, #27ae60, #2ecc71)',
        category: 'macOS 15',
        preview: '🌳'
    },
    {
        id: 'macos15_lake',
        name: 'Горное озеро',
        color: 'linear-gradient(135deg, #006994, #00b4db, #81ecec)',
        category: 'macOS 15',
        preview: '🏞️'
    },
    {
        id: 'macos15_desert',
        name: 'Пустыня',
        color: 'linear-gradient(135deg, #f7971e, #ffd200, #f9d423)',
        category: 'macOS 15',
        preview: '🏜️'
    },
    {
        id: 'macos15_aurora',
        name: 'Северное сияние',
        color: 'linear-gradient(135deg, #0c2340, #1a5276, #00d2ff, #2ecc71)',
        category: 'macOS 15',
        preview: '🌌'
    },

    // ============================================================
    // 3. ГРАДИЕНТЫ (классические)
    // ============================================================
    {
        id: 'gradient_blue',
        name: 'Синий градиент',
        color: 'linear-gradient(135deg, #007aff, #5856d6, #5ac8fa)',
        category: 'Градиенты',
        preview: '🔵'
    },
    {
        id: 'gradient_red',
        name: 'Красный градиент',
        color: 'linear-gradient(135deg, #ff3b30, #ff2d55, #ff6b6b)',
        category: 'Градиенты',
        preview: '🔴'
    },
    {
        id: 'gradient_green',
        name: 'Зелёный градиент',
        color: 'linear-gradient(135deg, #34c759, #28a745, #5ac8fa)',
        category: 'Градиенты',
        preview: '🟢'
    },
    {
        id: 'gradient_purple',
        name: 'Фиолетовый градиент',
        color: 'linear-gradient(135deg, #af52de, #8e44ad, #a29bfe)',
        category: 'Градиенты',
        preview: '🟣'
    },
    {
        id: 'gradient_orange',
        name: 'Оранжевый градиент',
        color: 'linear-gradient(135deg, #ff9500, #f7971e, #ff9a76)',
        category: 'Градиенты',
        preview: '🟠'
    },
    {
        id: 'gradient_pink',
        name: 'Розовый градиент',
        color: 'linear-gradient(135deg, #ff6b9d, #ff9a76, #fad0c4)',
        category: 'Градиенты',
        preview: '🩷'
    },
    {
        id: 'gradient_gold',
        name: 'Золотой градиент',
        color: 'linear-gradient(135deg, #f7971e, #ffd200, #f9d423)',
        category: 'Градиенты',
        preview: '⭐'
    },
    {
        id: 'gradient_teal',
        name: 'Бирюзовый градиент',
        color: 'linear-gradient(135deg, #00b4db, #0083b0, #00d2ff)',
        category: 'Градиенты',
        preview: '🩵'
    },
    {
        id: 'gradient_mint',
        name: 'Мятный градиент',
        color: 'linear-gradient(135deg, #00b894, #00cec9, #81ecec)',
        category: 'Градиенты',
        preview: '💚'
    },

    // ============================================================
    // 4. ПРИРОДА
    // ============================================================
    {
        id: 'nature_mountains',
        name: 'Горы в тумане',
        color: 'linear-gradient(135deg, #2d3436, #636e72, #b2bec3)',
        category: 'Природа',
        preview: '🏔️'
    },
    {
        id: 'nature_sunset_ocean',
        name: 'Закат над океаном',
        color: 'linear-gradient(135deg, #ff6b6b, #ee5a24, #f0932b)',
        category: 'Природа',
        preview: '🌅'
    },
    {
        id: 'nature_forest_fog',
        name: 'Лес в тумане',
        color: 'linear-gradient(135deg, #2d3436, #27ae60, #2ecc71)',
        category: 'Природа',
        preview: '🌳'
    },
    {
        id: 'nature_ocean_waves',
        name: 'Океанские волны',
        color: 'linear-gradient(135deg, #006994, #00b4db, #81ecec)',
        category: 'Природа',
        preview: '🌊'
    },
    {
        id: 'nature_desert_sun',
        name: 'Пустыня в лучах',
        color: 'linear-gradient(135deg, #f7971e, #ffd200, #f9d423)',
        category: 'Природа',
        preview: '🏜️'
    },

    // ============================================================
    // 5. ГОРОДА
    // ============================================================
    {
        id: 'city_nyc',
        name: 'Нью-Йорк ночью',
        color: 'linear-gradient(135deg, #0c0c0c, #1a1a2e, #2c3e50)',
        category: 'Города',
        preview: '🗽'
    },
    {
        id: 'city_tokyo',
        name: 'Токио: Сакура',
        color: 'linear-gradient(135deg, #ff6b9d, #ff9a76, #f8e1e8)',
        category: 'Города',
        preview: '🌸'
    },
    {
        id: 'city_paris',
        name: 'Париж: Золотой свет',
        color: 'linear-gradient(135deg, #f7971e, #ffd200, #f9d423)',
        category: 'Города',
        preview: '🗼'
    },
    {
        id: 'city_london',
        name: 'Лондон: Туман',
        color: 'linear-gradient(135deg, #2d3436, #636e72, #b2bec3)',
        category: 'Города',
        preview: '🇬🇧'
    },
    {
        id: 'city_dubai',
        name: 'Дубай: Панорама',
        color: 'linear-gradient(135deg, #1a5276, #2e86c1, #74b9ff)',
        category: 'Города',
        preview: '🏙️'
    },

    // ============================================================
    // 6. КОСМОС
    // ============================================================
    {
        id: 'space_galaxy',
        name: 'Спиральная галактика',
        color: 'linear-gradient(135deg, #000000, #0a0a2e, #6a0572)',
        category: 'Космос',
        preview: '🌌'
    },
    {
        id: 'space_nebula',
        name: 'Туманность Ориона',
        color: 'linear-gradient(135deg, #0c0c0c, #1a001a, #3d003d)',
        category: 'Космос',
        preview: '🔮'
    },
    {
        id: 'space_starfield',
        name: 'Звёздное небо',
        color: 'linear-gradient(135deg, #000000, #0a0a2e, #1a1a4e)',
        category: 'Космос',
        preview: '⭐'
    },
    {
        id: 'space_milkyway',
        name: 'Млечный путь',
        color: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        category: 'Космос',
        preview: '🌌'
    },

    // ============================================================
    // 7. AOD (Always-On Display)
    // ============================================================
    {
        id: 'aod_minimal',
        name: 'Минимал (AOD)',
        color: 'linear-gradient(135deg, #000000, #111111, #1a1a1a)',
        category: 'AOD',
        preview: '⬛'
    },
    {
        id: 'aod_contour',
        name: 'Контур (AOD)',
        color: 'linear-gradient(135deg, #1a1a1a, #2c2c2e, #3a3a3c)',
        category: 'AOD',
        preview: '◻️'
    },
    {
        id: 'aod_mono',
        name: 'Монохром (AOD)',
        color: 'linear-gradient(135deg, #222222, #333333, #444444)',
        category: 'AOD',
        preview: '⬜'
    }
];

// ============================================================
// НАСТРОЙКИ
// ============================================================

let selectedWallpaper = localStorage.getItem('selectedWallpaper') || 'gradient_blue';

// ---------- РЕНДЕРИНГ ----------
function renderWallpapers(container) {
    if (!container) {
        container = document.getElementById('app-content');
    }
    if (!container) return;

    const query = document.getElementById('wallpaperSearch')?.value?.toLowerCase() || '';

    let html = `
        <div class="search-bar">
            <span>🔍</span>
            <input type="text" id="wallpaperSearch" placeholder="Поиск обоев..." oninput="filterWallpapers()">
        </div>
        <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:12px;">
            <span class="category-filter" onclick="filterByCategory('all')" style="padding:4px 12px; border-radius:14px; background:#007aff; color:#fff; font-size:11px; cursor:pointer;">Все</span>
            <span class="category-filter" onclick="filterByCategory('iOS 18 · Перламутр')" style="padding:4px 12px; border-radius:14px; background:#2c2c2e; color:#fff; font-size:11px; cursor:pointer;">✨ Перламутр</span>
            <span class="category-filter" onclick="filterByCategory('iOS 18 · Глубины')" style="padding:4px 12px; border-radius:14px; background:#2c2c2e; color:#fff; font-size:11px; cursor:pointer;">🌊 Глубины</span>
            <span class="category-filter" onclick="filterByCategory('iOS 18 · Геометрия')" style="padding:4px 12px; border-radius:14px; background:#2c2c2e; color:#fff; font-size:11px; cursor:pointer;">⬡ Геометрия</span>
            <span class="category-filter" onclick="filterByCategory('macOS 15')" style="padding:4px 12px; border-radius:14px; background:#2c2c2e; color:#fff; font-size:11px; cursor:pointer;">🖥️ macOS 15</span>
            <span class="category-filter" onclick="filterByCategory('Градиенты')" style="padding:4px 12px; border-radius:14px; background:#2c2c2e; color:#fff; font-size:11px; cursor:pointer;">🎨 Градиенты</span>
            <span class="category-filter" onclick="filterByCategory('Природа')" style="padding:4px 12px; border-radius:14px; background:#2c2c2e; color:#fff; font-size:11px; cursor:pointer;">🌿 Природа</span>
            <span class="category-filter" onclick="filterByCategory('Города')" style="padding:4px 12px; border-radius:14px; background:#2c2c2e; color:#fff; font-size:11px; cursor:pointer;">🏙️ Города</span>
            <span class="category-filter" onclick="filterByCategory('Космос')" style="padding:4px 12px; border-radius:14px; background:#2c2c2e; color:#fff; font-size:11px; cursor:pointer;">🌌 Космос</span>
            <span class="category-filter" onclick="filterByCategory('AOD')" style="padding:4px 12px; border-radius:14px; background:#2c2c2e; color:#fff; font-size:11px; cursor:pointer;">⬛ AOD</span>
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
        html += `
            <div class="wallpaper-item ${active}" onclick="selectWallpaper('${w.id}')">
                <div class="preview" style="background:${w.color};"></div>
                <span class="label">${w.name}</span>
                <span style="position:absolute;top:4px;right:4px;font-size:7px;background:rgba(0,0,0,0.7);padding:1px 6px;border-radius:8px;color:#8e8e93;">${w.category}</span>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}

function filterWallpapers() {
    const container = document.getElementById('app-content');
    if (container) renderWallpapers(container);
}

function filterByCategory(category) {
    const search = document.getElementById('wallpaperSearch');
    if (!search) return;
    search.value = category === 'all' ? '' : category;
    filterWallpapers();
}

function selectWallpaper(id) {
    selectedWallpaper = id;
    localStorage.setItem('selectedWallpaper', id);

    const w = wallpapers.find(wp => wp.id === id);
    if (w) {
        document.getElementById('screen').style.background = w.color;
        document.getElementById('screen').style.backgroundImage = 'none';
        showToast(`✅ Обои "${w.name}" установлены`);
    }

    const container = document.getElementById('app-content');
    if (container) renderWallpapers(container);
}

// ---------- ИНИЦИАЛИЗАЦИЯ ----------
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('selectedWallpaper');
    if (saved) {
        const w = wallpapers.find(wp => wp.id === saved);
        if (w) {
            document.getElementById('screen').style.background = w.color;
            document.getElementById('screen').style.backgroundImage = 'none';
        }
    }
});

// Делаем доступным глобально
window.wallpapers = wallpapers;
window.renderWallpapers = renderWallpapers;
window.selectWallpaper = selectWallpaper;
window.filterByCategory = filterByCategory;