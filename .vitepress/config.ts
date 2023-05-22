import { defineConfig } from 'vitepress'
import vueNestedSFC from 'vite-plugin-vue-nested-sfc';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      vueNestedSFC()
    ]
  },
  title: "Home",
  srcDir: "pages",
  titleTemplate: "For Astro",
  description: "A VitePress Site",
  cleanUrls: true,
  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Libraries',
        items: [
          { link: "/libraries/flow/index", text: "Flow" },
          { link: "/libraries/utilities", text: "Utilities" }
        ]
      },

    ],

    sidebar: [
      {
        text: 'Libraries',
        items: [
          {
            text: "Flow",
            items: [
              { text: "For", link: "/libraries/flow/for" }
            ]
          },
        ]
      },

    ],
    footer: {
      message: "All Libraries are MIT",
      copyright: "Copyright 2023-present by Shelton Louis"
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/louiss0/forastro' }
    ]
  }
})
