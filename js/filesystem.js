const FS = {
    "/": ["System", "Applications", "usr", "etc", "var", "bin", "sbin", "dev", "tmp"],
    "/System/Library/Frameworks/": [
        "Foundation.framework", "UIKit.framework", "CoreData.framework", 
        "SwiftUI.framework", "ARKit.framework", "Metal.framework", 
        "CoreAnimation.framework", "AVFoundation.framework" // + 92 more
    ],
    "/System/Library/PrivateFrameworks/": Array.from({length: 500}, (_, i) => `PrivateLib_${i}.framework`),
    "/Applications/": [
        "Settings.app", "AppStore.app", "Terminal.app", "Camera.app", 
        "Safari.app", "Photos.app", "Music.app", "Messages.app", "Shortcuts.app"
    ],
    "/usr/bin/": ["ls", "cd", "cat", "grep", "top", "sudo", "git", "vim", "python3"],
    "/var/mobile/Library/Wallpaper/": ["default.jpg", "dynamic_earth.mov"],
};

// Функция инициализации структуры для 100+ фреймворков
function initExtendedFS() {
    for(let i=0; i<100; i++) {
        FS["/System/Library/Frameworks/"].push(`Framework_${i}.framework`);
    }
}
initExtendedFS();