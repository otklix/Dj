// ============================================================
// iOS 18.7 - Камера
// ============================================================

let cameraMode = 'photo';

function renderCamera(container) {
    container.innerHTML = `
        <div class="camera-view">
            <div class="viewfinder">📸</div>
            <div class="camera-controls">
                <span class="mode ${cameraMode === 'photo' ? 'active' : ''}" onclick="setCameraMode('photo')">Фото</span>
                <span class="mode ${cameraMode === 'video' ? 'active' : ''}" onclick="setCameraMode('video')">Видео</span>
                <span class="mode ${cameraMode === 'portrait' ? 'active' : ''}" onclick="setCameraMode('portrait')">Портрет</span>
            </div>
            <div class="camera-shutter" onclick="takePhoto()"></div>
        </div>
    `;
}

function setCameraMode(mode) {
    cameraMode = mode;
    const container = document.getElementById('app-content');
    if (container) renderCamera(container);
    const modeNames = { photo: 'Фото', video: 'Видео', portrait: 'Портрет' };
    showToast(`📷 Режим: ${modeNames[mode] || mode}`);
}

function takePhoto() {
    showToast('📸 Снимок сделан!');
}