// ============================================================
// Apple i18n - Интернационализация и локализация
// Официальный компонент AppleOSSDistributions/libiconv
// ============================================================

const AppleI18N = {
    name: 'i18n',
    path: 'i18n/',
    version: '1.0',
    status: 'active',
    age: '3 years',
    
    // ---------- ФАЙЛЫ ----------
    files: [
        { name: 'i18n.c', description: 'Основная логика интернационализации' },
        { name: 'i18n.h', description: 'Заголовочный файл' },
        { name: 'locale.c', description: 'Управление локалями' },
        { name: 'locale.h', description: 'Заголовок локалей' },
        { name: 'translation.c', description: 'Перевод строк' },
        { name: 'translation.h', description: 'Заголовок перевода' }
    ],
    
    // ---------- ЯЗЫКИ ----------
    languages: {
        'ru': { name: 'Русский', native: 'Русский', locale: 'ru_RU' },
        'en': { name: 'English', native: 'English', locale: 'en_US' },
        'uk': { name: 'Українська', native: 'Українська', locale: 'uk_UA' },
        'de': { name: 'Deutsch', native: 'Deutsch', locale: 'de_DE' },
        'fr': { name: 'Français', native: 'Français', locale: 'fr_FR' },
        'es': { name: 'Español', native: 'Español', locale: 'es_ES' },
        'it': { name: 'Italiano', native: 'Italiano', locale: 'it_IT' },
        'pt': { name: 'Português', native: 'Português', locale: 'pt_PT' },
        'zh': { name: '中文', native: '中文', locale: 'zh_CN' },
        'ja': { name: '日本語', native: '日本語', locale: 'ja_JP' },
        'ko': { name: '한국어', native: '한국어', locale: 'ko_KR' },
        'ar': { name: 'العربية', native: 'العربية', locale: 'ar_SA' },
        'he': { name: 'עברית', native: 'עברית', locale: 'he_IL' },
        'hi': { name: 'हिन्दी', native: 'हिन्दी', locale: 'hi_IN' },
        'th': { name: 'ไทย', native: 'ไทย', locale: 'th_TH' }
    },
    
    // ---------- ИНФОРМАЦИЯ ----------
    info: function() {
        return {
            name: this.name,
            path: this.path,
            version: this.version,
            status: this.status,
            files: this.files.length,
            languages: Object.keys(this.languages).length
        };
    },
    
    // Получить язык по коду
    getLanguage: function(code) {
        return this.languages[code] || null;
    },
    
    // Получить список всех языков
    getLanguages: function() {
        return this.languages;
    }
};

window.AppleI18N = AppleI18N;
console.log('🌍 Apple I18N загружен');