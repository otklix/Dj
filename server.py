from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import requests
import os
import json
import sys

app = Flask(__name__)
CORS(app)

# ===== КОНФИГ =====
GITHUB_TOKEN = os.getenv('GITHUB_TOKEN', '')
REPO_OWNER = 'ВАШ_НИК_НА_GITHUB'  # ← ИЗМЕНИТЕ
REPO_NAME = 'Roblox-Cloud-Bot'     # ← НАЗВАНИЕ ВАШЕГО РЕПОЗИТОРИЯ

def check_password(password):
    correct = os.getenv('BOT_PASSWORD', '')
    return password == correct

def trigger_github_actions(game_link, player_nick, action, duration):
    if not GITHUB_TOKEN:
        return False, "GITHUB_TOKEN не установлен!"

    url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/actions/workflows/roblox-bot.yml/dispatches"

    headers = {
        "Authorization": f"token {GITHUB_TOKEN}",
        "Accept": "application/vnd.github.v3+json"
    }

    payload = {
        "ref": "main",
        "inputs": {
            "game_link": game_link,
            "action": action,
            "duration": str(duration),
            "user_password": os.getenv('BOT_PASSWORD', '')
        }
    }

    try:
        response = requests.post(url, headers=headers, json=payload)
        if response.status_code == 204:
            return True, "✅ Бот запущен в GitHub Actions!"
        else:
            return False, f"❌ Ошибка GitHub: {response.status_code}"
    except Exception as e:
        return False, f"❌ Ошибка: {e}"

@app.route('/')
def index():
    try:
        return render_template('web.html')
    except:
        return "🤖 Roblox Bot Server is running!", 200

@app.route('/api/trigger', methods=['POST'])
def trigger():
    data = request.json
    password = data.get('password')
    game_link = data.get('game_link')
    player_nick = data.get('player_nick')
    action = data.get('action')
    duration = data.get('duration', 60)

    if not check_password(password):
        return jsonify({'status': 'error', 'message': '❌ Неверный пароль!'}), 401

    success, message = trigger_github_actions(game_link, player_nick, action, duration)

    if success:
        return jsonify({'status': 'success', 'message': message})
    else:
        return jsonify({'status': 'error', 'message': message}), 500

@app.route('/api/stop', methods=['POST'])
def stop():
    return jsonify({'status': 'error', 'message': 'Остановка доступна только в интерфейсе GitHub'}), 400

@app.route('/health')
def health():
    return jsonify({'status': 'ok', 'message': 'Server is running!'})

if __name__ == '__main__':
    # Создаем папку templates если нет
    os.makedirs('templates', exist_ok=True)
    
    # Запускаем сервер
    port = int(os.getenv('PORT', 5000))
    print(f"🚀 Starting server on port {port}...")
    app.run(host='0.0.0.0', port=port, debug=False, threaded=True)