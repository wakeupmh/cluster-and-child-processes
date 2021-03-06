module.exports = {
  apps: [
    {
      name: 'Express App',
      script: './server.js',
      instances: '2',
      autorestart: false,
      watch: true,
      max_memory_restart: '1G',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'FirstWorker',
      script: './worker-consumer.js',
      instances: 1
    },
    {
      name: 'SecondWorker',
      script: './worker-consumer.js',
      instances: 1
    }
  ],
};