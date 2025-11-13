# GitHub Actions Deployment Setup

## Required GitHub Secrets

Aby uruchomić automatyczne wdrożenie, musisz dodać następujące sekrety w GitHub:

### Krok 1: Przejdź do ustawień repozytorium
1. Otwórz repozytorium na GitHub
2. Kliknij **Settings** (Ustawienia)
3. W lewym menu wybierz **Secrets and variables** > **Actions**
4. Kliknij **New repository secret**

### Krok 2: Dodaj następujące sekrety

#### `VPS_HOST`
- **Wartość**: `5.175.140.38`
- Adres IP serwera VPS

#### `VPS_USERNAME`
- **Wartość**: nazwa użytkownika SSH (prawdopodobnie `root` lub `debian`)
- Użytkownik, którym logujesz się na serwer

#### `VPS_SSH_KEY`
- **Wartość**: Pełna zawartość prywatnego klucza SSH
- Aby uzyskać klucz, uruchom na swoim komputerze:
  ```bash
  cat ~/.ssh/id_rsa
  ```
  lub jeśli używasz innego klucza:
  ```bash
  cat ~/.ssh/nazwa_twojego_klucza
  ```
- Skopiuj **całą** zawartość (od `-----BEGIN OPENSSH PRIVATE KEY-----` do `-----END OPENSSH PRIVATE KEY-----`)

#### `VPS_PORT`
- **Wartość**: `22` (domyślny port SSH, chyba że zmieniony)

#### `PROJECT_PATH`
- **Wartość**: Pełna ścieżka do projektu na serwerze
- Przykład: `/home/debian/makosza-internet-marketing` lub `/root/projects/makosza-internet-marketing`
- Aby znaleźć, zaloguj się na serwer i uruchom `pwd` w katalogu projektu

## Jak to działa

1. **Trigger**: Workflow uruchamia się automatycznie po każdym `git push` do brancha `master`
2. **Połączenie SSH**: GitHub łączy się z twoim serwerem VPS używając podanych credentials
3. **Deployment**:
   - Przeciąga najnowszy kod z GitHub (`git pull`)
   - Instaluje/aktualizuje zależności backendu (`npm install`)
   - Instaluje/aktualizuje zależności frontendu (`npm install`)
   - Restartuje aplikacje przez PM2 (`pm2 restart`)
   - Zapisuje stan PM2 (`pm2 save`)

## Weryfikacja

Po skonfigurowaniu sekretów:
1. Zrób commit i push tego pliku workflow
2. Przejdź do zakładki **Actions** w GitHub
3. Powinieneś zobaczyć uruchomiony workflow "Deploy to VPS"
4. Kliknij na workflow aby zobaczyć logi z deploymentu

## Troubleshooting

### Błąd: "Permission denied (publickey)"
- Upewnij się, że klucz SSH jest poprawny
- Sprawdź czy klucz publiczny jest dodany na serwerze w `~/.ssh/authorized_keys`

### Błąd: "npm: command not found"
- Node.js/npm nie jest zainstalowany lub nie jest w PATH
- Dodaj ścieżkę do npm w workflow lub upewnij się że jest w PATH użytkownika

### Błąd: "pm2: command not found"
- PM2 nie jest zainstalowany globalnie
- Zainstaluj: `npm install -g pm2`

### Deployment działa ale strona nie działa
- Sprawdź logi PM2: `pm2 logs`
- Sprawdź status: `pm2 status`
- Zrestartuj ręcznie: `pm2 restart all`
