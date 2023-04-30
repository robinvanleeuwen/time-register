import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import postcss from './postcss.config.js';

export default defineConfig({
  server: {
     port: 8083,
     host: '0.0.0.0'
  },
  css: {
    postcss,
  },
  plugins: [svelte({
    /* plugin options */
  })]
})
