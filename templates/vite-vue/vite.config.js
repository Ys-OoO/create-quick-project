import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import process from 'process';

const isProduction = process.env.NODE_ENV === 'production';
const PRODUCTION_URL = '/';

export default defineConfig({
  base: isProduction ? PRODUCTION_URL : '/',
  plugins: [
    vue({
      isProduction,
    }),
  ],
});
