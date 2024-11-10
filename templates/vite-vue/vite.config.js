import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import process from 'process';
import viteLegacyPlugin from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';
const isProduction = process.env.NODE_ENV === 'production';
// change to your path
const PRODUCTION_URL = '/';

export default defineConfig({
  base: isProduction ? PRODUCTION_URL : '/',
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
        }),
      ],
    },
  },
  plugins: [
    vue({
      isProduction,
    }),
    viteLegacyPlugin({
      targets: [
        'ie >= 11, IOS >= 9,  Android>=4.4, last 2 versions, >0.2%, not dead',
      ],
    }),
  ],
});
