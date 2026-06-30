// ============================================================
// Apple esdb - База данных кодировок
// Официальный компонент AppleOSSDistributions/libiconv
// ============================================================

const AppleESDB = {
    name: 'esdb',
    path: 'esdb/',
    version: '1.0',
    status: 'stable',
    age: '3 years',
    
    // ---------- ФАЙЛЫ ----------
    files: [
        { name: 'esdb.c', description: 'Основная база данных' },
        { name: 'esdb.h', description: 'Заголовочный файл' },
        { name: 'encoding.c', description: 'Управление кодировками' },
        { name: 'encoding.h', description: 'Заголовок кодировок' },
        { name: 'alias.c', description: 'Алиасы кодировок' },
        { name: 'alias.h', description: 'Заголовок алиасов' }
    ],
    
    // ---------- БАЗА КОДИРОВОК ----------
    encodings: {
        'UTF-8': { aliases: ['UTF8', 'utf8'], family: 'Unicode' },
        'Windows-1251': { aliases: ['CP1251', 'win1251'], family: 'Cyrillic' },
        'KOI8-R': { aliases: ['KOI8R'], family: 'Cyrillic' },
        'CP866': { aliases: ['IBM866', '866'], family: 'Cyrillic' },
        'ISO-8859-5': { aliases: ['ISO8859-5'], family: 'Cyrillic' },
        'MacCyrillic': { aliases: ['MacCyrillic'], family: 'Cyrillic' }
    },
    
    // ---------- ИНФОРМАЦИЯ ----------
    info: function() {
        return {
            name: this.name,
            path: this.path,
            version: this.version,
            status: this.status,
            files: this.files.length,
            encodings: Object.keys(this.encodings).length
        };
    },
    
    // Получить информацию о кодировке
    getEncoding: function(name) {
        return this.encodings[name] || null;
    },
    
    // Найти по алиасу
    findByAlias: function(alias) {
        for (const [name, data] of Object.entries(this.encodings)) {
            if (data.aliases.includes(alias)) return name;
        }
        return null;
    }
};

window.AppleESDB = AppleESDB;
console.log('💾 Apple ESDB загружен');