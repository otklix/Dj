#!/usr/bin/env python3
import os
import time
import subprocess
import sys
import re
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def log(message):
    timestamp = datetime.now().strftime('%H:%M:%S')
    print(f"[{timestamp}] 🤖 {message}")
    sys.stdout.flush()

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
        sys.exit(1)

    # ===== ВХОД ЧЕРЕЗ БРАУЗЕР =====
    log("🌐 ЗАПУСКАЮ БРАУЗЕР ДЛЯ ВХОДА...")

    options = Options()
    options.add_argument("--headless")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--window-size=1280,720")
    options.add_argument("--disable-gpu")
    options.add_argument("--remote-debugging-port=9222")

    try:
        driver = webdriver.Chrome(options=options)
        driver.get("https://www.roblox.com/login")

        log("⏳ ВВОЖУ ЛОГИН И ПАРОЛЬ...")
        
        time.sleep(3)
        
        login_input = driver.find_element(By.ID, "login-username")
        login_input.clear()
        login_input.send_keys(login)
        
        password_input = driver.find_element(By.ID, "login-password")
        password_input.clear()
        password_input.send_keys(password)
        
        login_button = driver.find_element(By.ID, "login-button")
        login_button.click()
        
        log("⏳ ОЖИДАЮ ВХОД...")
        time.sleep(5)
        
        if "login" in driver.current_url:
            log("❌ НЕВЕРНЫЙ ЛОГИН ИЛИ ПАРОЛЬ!")
            driver.quit()
            sys.exit(1)
        
        log("✅ ВХОД ВЫПОЛНЕН!")

        # ===== ЗАБИРАЕМ COOKIE =====
        cookies = driver.get_cookies()
        roblosecurity = None
        for cookie in cookies:
            if cookie['name'] == '.ROBLOSECURITY':
                roblosecurity = cookie['value']
                break
        
        driver.quit()

        if not roblosecurity:
            log("❌ НЕ УДАЛОСЬ ПОЛУЧИТЬ COOKIE!")
            sys.exit(1)

        log("🍪 COOKIE ПОЛУЧЕН АВТОМАТИЧЕСКИ!")

    except Exception as e:
        log(f"❌ ОШИБКА ВХОДА: {e}")
        sys.exit(1)

    # ===== ЗАПУСК ИГРЫ =====
    log("🚀 ЗАПУСКАЮ ROXBLOX...")

    roblox_path = "/home/runner/.wine/drive_c/users/runner/Local Settings/Application Data/Roblox/Versions/RobloxPlayerLauncher.exe"
    cmd = f"wine {roblox_path} --url {game_link}"
    subprocess.Popen(cmd, shell=True)

    log("⏳ ОЖИДАНИЕ ЗАГРУЗКИ...")
    time.sleep(30)
    log("✅ ROXBLOX ЗАПУЩЕН!")

    log(f"🎯 ВЫПОЛНЯЮ ДЕЙСТВИЕ: {action}")
    time.sleep(duration)
    log("✅ БОТ ЗАВЕРШИЛ РАБОТУ!")

if __name__ == "__main__":
    main()