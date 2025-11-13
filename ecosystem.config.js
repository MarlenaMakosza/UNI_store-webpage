module.exports = {
  apps: [
    {
      name: 'strapi',
      cwd: './',
      script: 'npm',
      args: 'run develop',
      env: {
        NODE_ENV: 'development',
        HOST: '0.0.0.0',
        PORT: 1337,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
    {
      name: 'nextjs',
      cwd: './frontend',
      script: 'npm',
      args: 'run dev',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        NEXT_PUBLIC_STRAPI_URL: 'http://5.175.140.38:1337',
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
    },
  ],
};
