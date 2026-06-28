#!/usr/bin/env python3
import os
import time
import subprocess
import json
import hashlib
from datetime import datetime

# ===== ПОЛУЧАЕМ ПАРОЛЬ ИЗ GITHUB SECRETS =====
CORRECT_PASSWORD = os.getenv('BOT_PASSWORD', 'default_password_123')

# ===== ВАШИ НАСТРОЙКИ =====
GAME_LINK = os.getenv('GAME_LINK', 'https://www.roblox.com/games/123456789')
ACTION = os.getenv('ACTION', 'stand_and_wait')
DURATION = int(os.getenv('DURATION', 60))
USER_PASSWORD = os.getenv('USER_PASSWORD', '')  # Пароль, который вы ввели на сайте

def log(message):
    timestamp = datetime.now().strftime('%H:%M:%S')
    print(f"[{timestamp}] 🤖 {message}")
    with open('/tmp/bot.log', 'a') as f:
        f.write(f"[{timestamp}] {message}\n")

def check_password():
    """
    Проверяет пароль, который вы ввели на сайте
    """
    log(f"🔐 Проверка пароля...")
    
    if not USER_PASSWORD:
        log("❌ Пароль не введен!")
        return False
    
    if USER_PASSWORD == CORRECT_PASSWORD:
        log("✅ Пароль верный! Доступ разрешен.")
        return True
    else:
        log("❌ Неверный пароль! Доступ запрещен.")
        return False

def open_roblox(link):
    log(f"🚀 Открываю Roblox: {link}")
    roblox_path = "/home/runner/.wine/drive_c/users/runner/Local Settings/Application Data/Roblox/Versions/RobloxPlayerLauncher.exe"
    cmd = f"wine {roblox_path} --url {link}"
    subprocess.Popen(cmd, shell=True)
    time.sleep(20)
    log("✅ Roblox открыт!")
    return True

def press_key(key, duration=0.5):
    subprocess.run(['xdotool', 'keydown', key])
    time.sleep(duration)
    subprocess.run(['xdotool', 'keyup', key])

def click_screen(x, y):
    subprocess.run(['xdotool', 'mousemove', str(x), str(y)])
    subprocess.run(['xdotool', 'click', '1'])

def stand_and_wait():
    log(f"🧍 Бот стоит в игре {DURATION} секунд")
    for i in range(DURATION):
        if i % 10 == 0:
            log(f"⏳ Осталось {DURATION - i} сек")
        time.sleep(1)

def walk_to_player():
    log("🚶 Бот подходит к игроку...")
    press_key('w', 5)
    log("✅ Бот подошел")

def take_item():
    log("📦 Бот забирает предмет...")
    click_screen(640, 360)
    time.sleep(0.5)
    click_screen(640, 400)
    log("✅ Предмет забран")

def leave_game():
    log("🚪 Бот выходит из игры...")
    press_key('Escape', 0.5)
    time.sleep(1)
    press_key('Escape', 0.5)
    time.sleep(1)
    click_screen(1200, 680)
    log("✅ Бот вышел")

def main():
    log("🤖 Запуск Roblox Cloud Bot...")
    
    # ===== ПРОВЕРКА ПАРОЛЯ =====
    if not check_password():
        log("⛔ Доступ запрещен! Неверный пароль.")
        return
    
    log(f"🎮 Ссылка: {GAME_LINK}")
    log(f"🎯 Действие: {ACTION}")
    log(f"👤 Вы авторизованы как владелец бота")
    
    if not open_roblox(GAME_LINK):
        log("❌ Ошибка открытия Roblox")
        return
    
    time.sleep(15)
    
    if ACTION == 'stand_and_wait':
        stand_and_wait()
    elif ACTION == 'walk_to_player':
        walk_to_player()
    elif ACTION == 'take_item':
        take_item()
    elif ACTION == 'leave_game':
        leave_game()
    
    log("✅ Бот завершил работу!")

if __name__ == "__main__":
    main()
