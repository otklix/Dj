// ============================================================
// iOS 18.7 - Field Test Mode
// ============================================================

function renderFieldTest(container) {
    const battery = document.getElementById('battery')?.innerText || '100%';
    
    container.innerHTML = `
        <div class="field-content">
            📡 Field Test Mode\n
            ================\n
            🏢 Operator: MegaFon\n
            📶 Signal: -78 dBm\n
            📊 Band: n78 (3500 MHz)\n
            📡 5G NR: Connected\n
            🚀 Speed: 1.2 Gbps DL / 150 Mbps UL\n
            🔄 Handover: Active\n
            🌍 Location: 55.7558° N, 37.6173° E\n
            ⏱️ Timing Advance: 0.5 ms\n
            📱 Cell ID: 0x1A3F4C\n
            ================\n
            🔋 Battery: ${battery}\n
            🔄 Cycles: 147\n
            🌡️ Temp: 36.2°C\n
            ================\n
            <span class="highlight">*3001#12345#*</span>
        </div>
    `;
}