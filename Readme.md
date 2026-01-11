
  PM2 to process manager, który jest super do Deno też:

  # Zainstaluj PM2
  npm install -g pm2

  # Uruchom serwer Deno z PM2
  pm2 start --name technest "deno task dev"

  # Albo bezpośrednio:
  pm2 start --name technest --interpreter deno -- run --allow-all dev.ts

  # Przydatne komendy:
  pm2 list              # Lista procesów
  pm2 logs technest     # Logi na żywo
  pm2 restart technest  # Restart
  pm2 stop technest     # Stop
  pm2 delete technest   # Usuń

  # Auto-start przy restarcie VPSa:
  pm2 startup
  pm2 save

  # Monitoring:
  pm2 monit
