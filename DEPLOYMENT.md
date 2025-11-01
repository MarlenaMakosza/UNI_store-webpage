# 🚀 Deployment Guide - Mikrus VPS

Instrukcja wdrożenia projektu na VPS Mikrus pod adresem:
- **Frontend**: https://marlenamakosza.com/studies/internet-marketing
- **Backend API**: https://marlenamakosza.com/api
- **Admin Panel**: https://marlenamakosza.com/admin

---

## 📋 Wymagania

- VPS Mikrus (lub inny z Ubuntu 20.04+/Debian 11+)
- Domena marlenamakosza.com skonfigurowana (DNS A record wskazujący na IP VPS)
- Dostęp SSH do serwera
- Node.js 18+ (zainstalowany na serwerze)
- Nginx (zainstalowany na serwerze)
- PM2 (do zarządzania procesami Node.js)

---

## 🔧 Część 1: Przygotowanie Serwera

### 1.1. Połącz się z serwerem przez SSH

```bash
ssh user@your-mikrus-ip
# lub jeśli masz skonfigurowaną domenę:
ssh user@marlenamakosza.com
```

### 1.2. Zaktualizuj system

```bash
sudo apt update
sudo apt upgrade -y
```

### 1.3. Zainstaluj Node.js 18+ (jeśli nie masz)

```bash
# Dodaj repozytorium NodeSource
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Zainstaluj Node.js
sudo apt install -y nodejs

# Sprawdź wersję
node --version  # powinno być >= v18
npm --version
```

### 1.4. Zainstaluj PM2 globalnie

```bash
sudo npm install -g pm2

# Skonfiguruj PM2 do autostartu
pm2 startup
# Wykonaj komendę, którą PM2 wyświetli
```

### 1.5. Zainstaluj Nginx (jeśli nie masz)

```bash
sudo apt install -y nginx

# Sprawdź czy działa
sudo systemctl status nginx
```

---

## 📦 Część 2: Deployment Aplikacji

### 2.1. Sklonuj repozytorium

```bash
# Przejdź do katalogu www
cd /var/www

# Sklonuj repozytorium
sudo git clone https://github.com/MarlenaMakosza/makosza-internet-marketing.git
cd makosza-internet-marketing

# Ustaw właściciela (zamień 'user' na swojego użytkownika)
sudo chown -R $USER:$USER /var/www/makosza-internet-marketing
```

### 2.2. Skonfiguruj Backend (Strapi)

```bash
# Skopiuj i edytuj plik .env
cp .env.example .env
nano .env
```

**Edytuj `.env` i ustaw produkcyjne wartości:**

```env
HOST=127.0.0.1
PORT=1337
APP_KEYS="wygeneruj-losowe-klucze-tutaj"
API_TOKEN_SALT=wygeneruj-losowy-token
ADMIN_JWT_SECRET=wygeneruj-losowy-secret
TRANSFER_TOKEN_SALT=wygeneruj-losowy-salt
JWT_SECRET=wygeneruj-losowy-jwt-secret
ENCRYPTION_KEY=wygeneruj-losowy-klucz

# Dodaj URL produkcyjny
URL=https://marlenamakosza.com
```

**Wygeneruj bezpieczne klucze:**

```bash
# Użyj openssl do wygenerowania losowych kluczy
openssl rand -base64 32  # Powtórz dla każdego klucza
```

**Zainstaluj zależności i zbuduj backend:**

```bash
npm install --production
npm run build
```

### 2.3. Skonfiguruj Frontend (Next.js)

```bash
cd frontend

# Skopiuj plik .env
cp .env.example .env.local
nano .env.local
```

**Edytuj `.env.local`:**

```env
NEXT_PUBLIC_API_URL=https://marlenamakosza.com/api
```

**Zainstaluj zależności i zbuduj frontend:**

```bash
npm install
npm run build
```

### 2.4. Uruchom aplikacje przez PM2

```bash
# Wróć do głównego katalogu projektu
cd /var/www/makosza-internet-marketing

# Uruchom obie aplikacje
pm2 start ecosystem.config.js

# Sprawdź status
pm2 status

# Zobacz logi
pm2 logs

# Zapisz konfigurację PM2
pm2 save
```

---

## 🌐 Część 3: Konfiguracja Nginx

### 3.1. Skopiuj konfigurację Nginx

```bash
# Skopiuj plik konfiguracji
sudo cp nginx-site.conf /etc/nginx/sites-available/marlenamakosza.com

# Zaktualizuj ścieżki do certyfikatów SSL w pliku
sudo nano /etc/nginx/sites-available/marlenamakosza.com
```

### 3.2. Zainstaluj SSL certyfikat (Let's Encrypt)

```bash
# Zainstaluj certbot
sudo apt install -y certbot python3-certbot-nginx

# Wygeneruj certyfikat
sudo certbot --nginx -d marlenamakosza.com -d www.marlenamakosza.com

# Certyfikat zostanie automatycznie dodany do Nginx
```

### 3.3. Aktywuj konfigurację Nginx

```bash
# Utwórz symlink
sudo ln -s /etc/nginx/sites-available/marlenamakosza.com /etc/nginx/sites-enabled/

# Usuń domyślną konfigurację (jeśli istnieje)
sudo rm /etc/nginx/sites-enabled/default

# Sprawdź konfigurację
sudo nginx -t

# Przeładuj Nginx
sudo systemctl reload nginx
```

---

## 🔒 Część 4: Firewall i Bezpieczeństwo

### 4.1. Skonfiguruj firewall UFW

```bash
# Zezwól na SSH
sudo ufw allow 22/tcp

# Zezwól na HTTP i HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Włącz firewall
sudo ufw enable

# Sprawdź status
sudo ufw status
```

### 4.2. Zabezpiecz Strapi Admin Panel

Po pierwszym uruchomieniu:
1. Odwiedź: https://marlenamakosza.com/admin
2. Stwórz konto administratora
3. **WAŻNE**: Zapisz dane logowania w bezpiecznym miejscu

---

## 📊 Część 5: Monitorowanie i Utrzymanie

### 5.1. Przydatne komendy PM2

```bash
# Status aplikacji
pm2 status

# Logi
pm2 logs
pm2 logs strapi-backend
pm2 logs nextjs-frontend

# Restart aplikacji
pm2 restart all
pm2 restart strapi-backend
pm2 restart nextjs-frontend

# Stop aplikacji
pm2 stop all

# Monitoring w czasie rzeczywistym
pm2 monit
```

### 5.2. Aktualizacja aplikacji

```bash
# Połącz się z serwerem
ssh user@marlenamakosza.com

# Przejdź do katalogu projektu
cd /var/www/makosza-internet-marketing

# Pobierz najnowsze zmiany
git pull origin master

# Zbuduj backend
npm install --production
npm run build

# Zbuduj frontend
cd frontend
npm install
npm run build
cd ..

# Restart aplikacji
pm2 restart all
```

### 5.3. Backup bazy danych

```bash
# Strapi używa SQLite - backup pliku .tmp/data.db
cp .tmp/data.db .tmp/data.db.backup-$(date +%Y%m%d)

# Lub skonfiguruj automatyczny backup
# Dodaj do crontab (crontab -e):
0 2 * * * cp /var/www/makosza-internet-marketing/.tmp/data.db /backups/strapi-$(date +\%Y\%m\%d).db
```

---

## ✅ Weryfikacja

Po deployment sprawdź:

1. **Frontend**: https://marlenamakosza.com/studies/internet-marketing
   - Strona powinna się załadować
   - Theme toggle powinien działać
   - Banery powinny się wyświetlać

2. **Backend API**: https://marlenamakosza.com/api
   - Powinna zwrócić JSON z informacjami o API

3. **Admin Panel**: https://marlenamakosza.com/admin
   - Panel logowania powinien być dostępny

4. **PM2 Status**:
   ```bash
   pm2 status
   # Obie aplikacje powinny być "online"
   ```

---

## 🐛 Troubleshooting

### Problem: Strona nie ładuje się

```bash
# Sprawdź logi Nginx
sudo tail -f /var/log/nginx/error.log

# Sprawdź czy aplikacje działają
pm2 status
pm2 logs
```

### Problem: 502 Bad Gateway

```bash
# Sprawdź czy aplikacje są uruchomione
pm2 status

# Uruchom ponownie
pm2 restart all

# Sprawdź porty
sudo netstat -tulpn | grep -E "1337|3000"
```

### Problem: Obrazki nie ładują się

- Sprawdź konfigurację `next.config.mjs`
- Sprawdź czy Strapi zwraca poprawne URL do obrazków
- Sprawdź logi: `pm2 logs strapi-backend`

---

## 📚 Dodatkowe Zasoby

- [Strapi Docs](https://docs.strapi.io/)
- [Next.js Docs](https://nextjs.org/docs)
- [PM2 Docs](https://pm2.keymetrics.io/)
- [Nginx Docs](https://nginx.org/en/docs/)
- [Let's Encrypt](https://letsencrypt.org/)

---

## 📞 Wsparcie

Jeśli napotkasz problemy:
1. Sprawdź logi: `pm2 logs`
2. Sprawdź status: `pm2 status`
3. Sprawdź logi Nginx: `sudo tail -f /var/log/nginx/error.log`
