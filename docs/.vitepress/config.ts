import { defineConfig } from 'vitepress';
import { sidebar, nav } from './relaConf';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'mondaylab-demo-blog',
  description: 'A VitePress Site',
  themeConfig: {
    logo: '/avatar.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
});
