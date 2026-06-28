import os, time, subprocess

PASSWORD = os.getenv('BOT_PASSWORD')
USER_PASSWORD = os.getenv('USER_PASSWORD')

if USER_PASSWORD != PASSWORD:
    print("❌ Неверный пароль!")
    exit(1)

print("✅ Пароль верный! Запускаю Roblox...")
subprocess.Popen(["wine", "/home/runner/.wine/drive_c/users/runner/Local Settings/Application Data/Roblox/Versions/RobloxPlayerLauncher.exe", "--url", os.getenv('GAME_LINK')])
time.sleep(20)
print("✅ Бот в игре!")
time.sleep(int(os.getenv('DURATION', 60)))
print("✅ Готово!")