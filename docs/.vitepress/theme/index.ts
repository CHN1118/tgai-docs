import type { Theme } from 'vitepress'
// 1. import vitepress theme
import escookTheme from '@escook/vitepress-theme'
// 2. import matching CSS styles (this step cannot be omitted)
import '@escook/vitepress-theme/style.css'
// import your custom styles
import './style.css'
import select_language from './components/select_language.vue'
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { onMounted, watch, nextTick,h } from 'vue'
import mediumZoom from 'medium-zoom'
import { useRoute } from 'vitepress'

export default {
  // 3. specify the theme to inherit and perform secondary extensions based on this theme
  extends: escookTheme,
  setup() {
    const route = useRoute()
    const initZoom = () => {
      // 为所有图片增加缩放功能
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },
  Layout: () => {
    return h(escookTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // expand custom features...
    app.component('SelectLanguage', select_language)
  }
} satisfies Theme