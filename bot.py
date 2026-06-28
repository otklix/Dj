#!/usr/bin/env python3
import os
import time
import sys
import requests
from datetime import datetime

def log(message):
    timestamp = datetime.now().strftime('%H:%M:%S')
    print(f"[{timestamp}] 🤖 {message}")
    sys.stdout.flush()

def main():
    log("🚀 ЗАПУСК БОТА...")

    game_link = os.getenv('GAME_LINK', '').strip()
    action = os.getenv('ACTION', 'stand_and_wait').strip()
    target_nick = os.getenv('TARGET_NICK', '').strip()
    roblosecurity = os.getenv('ROBLOSECURITY', '').strip()

    duration_str = os.getenv('DURATION', '60').strip()
    try:
        duration = int(float(duration_str))
    except ValueError:
        duration = 60

    log(f"📌 ССЫЛКА: {game_link}")
    log(f"📌 ДЕЙСТВИЕ: {action}")
    log(f"📌 ЦЕЛЬ: {target_nick}")
    log(f"⏱ ВРЕМЯ: {duration} сек")

    if not roblosecurity:
        log("❌ КУКА НЕ НАЙДЕНА В СЕКРЕТАХ!")
        sys.exit(1)

    log("🍪 КУКА ПОЛУЧЕНА ИЗ СЕКРЕТОВ")

    # ===== ПРОВЕРЯЕМ КУКУ =====
    try:
        session = requests.Session()
        session.cookies.set('.ROBLOSECURITY', roblosecurity)
        session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        
        response = session.get('https://www.roblox.com/mobileapi/userinfo')
        
        if response.status_code == 200:
            data = response.json()
            log(f"✅ ВХОД ВЫПОЛНЕН! ИМЯ: {data.get('UserName', 'Неизвестно')}")
            log(f"👤 ID: {data.get('UserID', 'Неизвестно')}")
        else:
            log(f"❌ КУКА НЕ РАБОТАЕТ! СТАТУС: {response.status_code}")
            sys.exit(1)
    except Exception as e:
        log(f"❌ ОШИБКА ПРОВЕРКИ: {e}")
        sys.exit(1)

    # ===== ВМЕСТО ЗАПУСКА ROXBLOX — ПРОСТО ИМИТИРУЕМ ДЕЙСТВИЕ =====
    log("⚠️ ROXBLOX НЕ ЗАПУСКАЕТСЯ В GITHUB ACTIONS (НЕТ ГРАФИКИ)")
    log(f"🎯 ВЫПОЛНЯЮ ДЕЙСТВИЕ (ИМИТАЦИЯ): {action}")
    log(f"⏳ ОЖИДАНИЕ {duration} СЕКУНД...")
    
    # Имитация выполнения действия
    for i in range(duration):
        if i % 10 == 0:
            log(f"⏳ ПРОШЛО {i} СЕКУНД...")
        time.sleep(1)
    
    log("✅ БОТ ЗАВЕРШИЛ РАБОТУ (ИМИТАЦИЯ)!")

if __name__ == "__main__":
    main()