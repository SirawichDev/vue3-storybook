import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import VueTypeImports from 'vite-plugin-vue-type-imports';
import generateSitemap from 'vite-plugin-pages-sitemap';
import Components from 'unplugin-vue-components/vite';

const SILENT = Boolean(process.env.SILENT) ?? false;
const SOURCE_MAP = Boolean(process.env.SOURCE_MAP) ?? false;
const SITEMAP_HOST = process.env.SITEMAP_HOST || 'http://localhost:3000/';

export default defineConfig({
  root: process.cwd(),
  base: '/',
  server: {
    port: 8080,
  },
  publicDir: 'public',
  logLevel: SILENT ? 'error' : 'info',
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: '/src/',
      },
    ],
  },
  build: {
    minify: false,
    sourcemap: SOURCE_MAP,
    chunkSizeWarningLimit: Infinity,
    rollupOptions: {
      external: [/\/demo\/.*/],
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),
    VueTypeImports(),
    Pages({
      pagesDir: [
        {
          dir: 'src/pages',
          baseRoute: '',
        },
      ],
      onRoutesGenerated: (routes) => generateSitemap({
        routes,
        hostname: SITEMAP_HOST,
      }),
    }),
    Components({
      dirs: ['@/components'],
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ],
});
