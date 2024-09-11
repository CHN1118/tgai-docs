import { defineConfigWithTheme } from 'vitepress'
import escookConfig from '@escook/vitepress-theme/config'


// const language = localStorage.getItem("language")
// console.log('language:', language)

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme(()=>{
  
  return {
  extends: escookConfig,
  title: "TGAI",
  description: "",
  head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
  themeConfig: {
    confetti: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {component:'SelectLanguage'},
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite:{
    ssr:{
      noExternal:['@escook/vitepress-theme','vitepress']
    }
  }
}})
