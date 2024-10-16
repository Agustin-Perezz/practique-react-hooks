import codeCoverageTask from '@cypress/code-coverage/task';
import { defineConfig } from 'cypress';
import { config } from 'dotenv';

config();

export default defineConfig({
  e2e: {
    baseUrl: process.env.CLIENT_BASE_URL,
    env: { base_url: process.env.CLIENT_BASE_URL },
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },
});
