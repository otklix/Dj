// ============================================================
// Apple csmapper - Маппер для конвертации кодировок
// Официальный компонент AppleOSSDistributions/libiconv
// ============================================================

const AppleCSMapper = {
    name: 'csmapper',
    path: 'csmapper/',
    version: '1.2',
    status: 'stable',
    age: '3 years',
    
    // ---------- ФАЙЛЫ ----------
    files: [
        { name: 'csmap.c', description: 'Основной маппер' },
        { name: 'csmap.h', description: 'Заголовочный файл' },
        { name: 'mapper.c', description: 'Логика маппинга' },
        { name: 'mapper.h', description: 'Заголовок маппера' },
        { name: 'table.c', description: 'Таблицы конвертации' },
        { name: 'table.h', description: 'Заголовок таблиц' }
    ],
    
    // ---------- МАППИНГИ ----------
    mappings: {
        'UTF-8': ['ASCII', 'ISO-8859-1', 'Windows-1251'],
        'Windows-1251': ['UTF-8', 'KOI8-R', 'CP866'],
        'KOI8-R': ['UTF-8', 'Windows-1251', 'CP866'],
        'CP866': ['UTF-8', 'Windows-1251', 'KOI8-R']
    },
    
    // ---------- ИНФОРМАЦИЯ ----------
    info: function() {
        return {
            name: this.name,
            path: this.path,
            version: this.version,
            status: this.status,
            files: this.files.length,
            mappings: Object.keys(this.mappings).length
        };
    },
    
    // Получить доступные маппинги
    getMappings: function(encoding) {
        return this.mappings[encoding] || [];
    }
};

window.AppleCSMapper = AppleCSMapper;
console.log('🗺️ Apple CSMapper загружен');