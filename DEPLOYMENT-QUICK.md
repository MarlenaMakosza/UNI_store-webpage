# 🚀 Quick Deployment - Mikrus VPS

Minimalistyczna instrukcja wdrożenia. Zakłada że masz już:
- Node.js 18+, Nginx, PM2 zainstalowane
- Domenę skonfigurowaną w DNS

---

## ⚡ Szybki Start (5 minut)

### 1. Sklonuj i skonfiguruj

```bash
cd /var/www
sudo git clone https://github.com/MarlenaMakosza/makosza-internet-marketing.git
cd makosza-internet-marketing
sudo chown -R $USER:$USER .

# Backend .env
cp .env.example .env
nano .env  # Ustaw APP_KEYS, JWT_SECRET itp. (openssl rand -base64 32)
# Ustaw: URL=https://marlenamakosza.com/projects/internet-marketing

npm install --production
npm run build

# Frontend .env
cd frontend
cp .env.example .env.local
nano .env.local  # Ustaw API_URL
# NEXT_PUBLIC_API_URL=https://marlenamakosza.com/projects/internet-marketing/api
# NEXT_PUBLIC_BASE_PATH=/projects/internet-marketing

npm install
npm run build
cd ..
```

### 2. Uruchom aplikacje

```bash
pm2 start ecosystem.config.js
pm2 save
```

### 3. Nginx

```bash
sudo cp nginx-site.conf /etc/nginx/sites-available/marlenamakosza.com

# Sprawdź czy ścieżka do głównej strony jest poprawna (linia 123):
# root /var/www/test;

sudo ln -s /etc/nginx/sites-available/marlenamakosza.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4. SSL (Let's Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d marlenamakosza.com -d www.marlenamakosza.com
```

### 5. Pierwsze uruchomienie

Odwiedź: https://marlenamakosza.com/projects/internet-marketing/admin

**WAŻNE:** Stwórz konto admina z **silnym hasłem** (16+ znaków, użyj menedżera haseł!)

---

## 🔄 Update (po zmianach w kodzie)

```bash
cd /var/www/makosza-internet-marketing
git pull
npm install --production && npm run build
cd frontend && npm install && npm run build && cd ..
pm2 restart all
```

---

## 🐛 Problemy?

```bash
pm2 logs                           # Logi aplikacji
pm2 status                         # Status procesów
sudo nginx -t                      # Test konfiguracji Nginx
sudo tail -f /var/log/nginx/error.log  # Logi Nginx
```

---

## 📍 Adresy

- **Sklep**: https://marlenamakosza.com/projects/internet-marketing
- **Admin**: https://marlenamakosza.com/projects/internet-marketing/admin
- **API**: https://marlenamakosza.com/projects/internet-marketing/api

---

## 🔐 Bezpieczeństwo admina

✅ Rate limiting: 5 prób/min
✅ HTTPS: Let's Encrypt
✅ Silne hasło: 16+ znaków
✅ Opcjonalnie IP whitelist: Edytuj nginx-site.conf linijki 37-39

---

📖 Pełna dokumentacja: `DEPLOYMENT.md`
