#!/usr/bin/env python3
import os
import time
import subprocess
import sys
import requests
import re
import json
from datetime import datetime

def log(message):
    timestamp = datetime.now().strftime('%H:%M:%S')
    print(f"[{timestamp}] 🤖 {message}")
    sys.stdout.flush()

def get_csrf_token(session):
    """Получает CSRF токен через /v2/logout"""
    try:
        response = session.post('https://auth.roblox.com/v2/logout')
        csrf = response.headers.get('x-csrf-token')
        if csrf:
            return csrf
        # Если не получилось, пробуем через /v2/login
        response = session.post('https://auth.roblox.com/v2/login')
        return response.headers.get('x-csrf-token')
    except:
        return None

def login_to_roblox(login, password):
    """Пытается войти в Roblox и вернуть .ROBLOSECURITY"""
    session = requests.Session()
    session.headers.update({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        'Content-Type': 'application/json',
        'Origin': 'https://www.roblox.com',
        'Referer': 'https://www.roblox.com/'
    })

    # Получаем CSRF токен
    csrf = get_csrf_token(session)
    if csrf:
        session.headers.update({'X-CSRF-TOKEN': csrf})

    # Пробуем войти
    login_data = {
        'ctype': 'Username',
        'cvalue': login,
        'password': password
    }

    try:
        response = session.post('https://auth.roblox.com/v2/login', json=login_data)
        data = response.json()
        
        if response.status_code == 200 and data.get('user'):
            # Успешный вход — забираем куку
            for cookie in session.cookies:
                if cookie.name == '.ROBLOSECURITY':
                    log("✅ ВХОД ВЫПОЛНЕН! ЗАБИРАЮ КУКУ...")
                    return cookie.value
        else:
            error = data.get('errors', [{}])[0].get('message', 'Неизвестная ошибка')
            log(f"❌ ОШИБКА ВХОДА: {error}")
            return None
    except Exception as e:
        log(f"❌ ОШИБКА: {e}")
        return None

def main():
    log("🚀 ЗАПУСК БОТА...")

    login = os.getenv('LOGIN', '').strip()
    password = os.getenv('PASSWORD', '').strip()
    game_link = os.getenv('GAME_LINK', '').strip()
    action = os.getenv('ACTION', 'stand_and_wait').strip()
    target_nick = os.getenv('TARGET_NICK', '').strip()

    duration_str = os.getenv('DURATION', '60').strip()
    try:
        duration = int(float(duration_str))
    except ValueError:
        duration = 60

    log(f"📌 ЛОГИН: {login}")
    log(f"📌 ССЫЛКА: {game_link[:50]}...")
    log(f"📌 ДЕЙСТВИЕ: {action}")

    if not login or not password:
        log("❌ НЕ ВВЕДЕНЫ ЛОГИН ИЛИ ПАРОЛЬ!")
        log("💡 ЗАПОЛНИТЕ ПОЛЯ ПРИ ЗАПУСКЕ WORKFLOW")
        sys.exit(1)

    # ===== ПОЛУЧАЕМ КУКУ БЕЗ БРАУЗЕРА =====
    log("🔑 ПЫТАЮСЬ ВОЙТИ В АККАУНТ...")
    roblosecurity = login_to_roblox(login, password)

    if not roblosecurity:
        log("❌ НЕ УДАЛОСЬ ПОЛУЧИТЬ КУКУ!")
        log("💡 ПРОВЕРЬТЕ ЛОГИН И ПАРОЛЬ")
        sys.exit(1)

    log("🍪 КУКА ПОЛУЧЕНА УСПЕШНО!")

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
            log(f"✅ ВХОД ПОДТВЕРЖДЁН! ИМЯ: {data.get('UserName', 'Неизвестно')}")
            log(f"👤 ID: {data.get('UserID', 'Неизвестно')}")
        else:
            log(f"❌ КУКА НЕ РАБОТАЕТ! СТАТУС: {response.status_code}")
            sys.exit(1)
    except Exception as e:
        log(f"❌ ОШИБКА ПРОВЕРКИ: {e}")
        sys.exit(1)

    # ===== ЗАПУСК ИГРЫ =====
    log("🚀 ЗАПУСКАЮ ROXBLOX...")

    roblox_path = "/home/runner/.wine/drive_c/users/runner/Local Settings/Application Data/Roblox/Versions/RobloxPlayerLauncher.exe"
    cmd = f"wine {roblox_path} --url {game_link}"
    subprocess.Popen(cmd, shell=True)

    log("⏳ ОЖИДАНИЕ ЗАГРУЗКИ (30 сек)...")
    time.sleep(30)
    log("✅ ROXBLOX ЗАПУЩЕН!")

    log(f"🎯 ВЫПОЛНЯЮ ДЕЙСТВИЕ: {action}")
    time.sleep(duration)
    log("✅ БОТ ЗАВЕРШИЛ РАБОТУ!")

if __name__ == "__main__":
    main()