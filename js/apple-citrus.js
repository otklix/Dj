// ============================================================
// Apple citrus - Система кодировок и локализации
// Официальный компонент AppleOSSDistributions/libiconv
// ============================================================

const AppleCitrus = {
    name: 'citrus',
    path: 'citrus/',
    version: '1.0',
    status: 'active',
    lastUpdated: '2024',
    
    // ---------- ФАЙЛЫ ----------
    files: [
        { name: 'citrus.c', description: 'Основная логика системы кодировок' },
        { name: 'citrus.h', description: 'Заголовочный файл' },
        { name: 'citrus_iconv.c', description: 'Интеграция с iconv' },
        { name: 'citrus_mapper.c', description: 'Маппинг кодировок' },
        { name: 'citrus_esdb.c', description: 'База данных кодировок' },
        { name: 'citrus_i18n.c', description: 'Интернационализация' }
    ],
    
    // ---------- ПОДДЕРЖИВАЕМЫЕ ЛОКАЛИ ----------
    locales: [
        'en_US', 'ru_RU', 'uk_UA', 'de_DE', 'fr_FR',
        'es_ES', 'it_IT', 'pt_PT', 'zh_CN', 'ja_JP',
        'ko_KR', 'ar_SA', 'he_IL', 'hi_IN', 'th_TH'
    ],
    
    // ---------- ИНФОРМАЦИЯ ----------
    info: function() {
        return {
            name: this.name,
            path: this.path,
            version: this.version,
            status: this.status,
            files: this.files.length,
            locales: this.locales.length
        };
    },
    
    // Получить список файлов
    getFiles: function() {
        return this.files.map(f => f.name);
    },
    
    // Проверить поддержку локали
    supportsLocale: function(locale) {
        return this.locales.includes(locale);
    }
};

window.AppleCitrus = AppleCitrus;
console.log('🍊 Apple Citrus загружен');