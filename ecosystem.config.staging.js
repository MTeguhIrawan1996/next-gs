module.exports = {
  apps: [
    {
      name: 'gsms_landing_page',
      namespace: 'gsms',
      script: 'node_modules/.bin/next',
      args: 'start -p 7911',
      cwd: '/home/kemdikbud/domains/gsms.kemdikbud.optimap.id/src',
      instances: '2',
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
