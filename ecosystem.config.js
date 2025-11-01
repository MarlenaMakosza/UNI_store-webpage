module.exports = {
  apps: [
    {
      name: 'strapi-backend',
      cwd: './',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        HOST: '127.0.0.1',
        PORT: 1337,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
    {
      name: 'nextjs-frontend',
      cwd: './frontend',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        NEXT_PUBLIC_API_URL: 'https://marlenamakosza.com/projects/internet-marketing/api',
        NEXT_PUBLIC_BASE_PATH: '/projects/internet-marketing',
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
