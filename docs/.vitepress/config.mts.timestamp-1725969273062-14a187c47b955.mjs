// docs/.vitepress/config.mts
import { defineConfigWithTheme } from "file:///Users/chn-xc/work/VueObj/tgai-docs/.yarn/__virtual__/vitepress-virtual-9e441ace20/4/.yarn/berry/cache/vitepress-npm-1.3.4-0f6dbdfb16-10c0.zip/node_modules/vitepress/dist/node/index.js";
import escookConfig from "file:///Users/chn-xc/.yarn/berry/cache/@escook-vitepress-theme-npm-1.3.1-cb0c33ffdd-10c0.zip/node_modules/@escook/vitepress-theme/dist/config.js";
var config_default = defineConfigWithTheme(() => {
  const cookieLang = req.headers.cookie.match(/language=(\w+);?/);
  console.log("cookieLang:", cookieLang);
  return {
    extends: escookConfig,
    title: "TGAI",
    description: "",
    head: [["link", { rel: "icon", href: "/logo.jpg" }]],
    themeConfig: {
      confetti: false,
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { component: "SelectLanguage" },
        { text: "Home", link: "/" },
        { text: "Examples", link: "/markdown-examples" }
      ],
      sidebar: [
        {
          text: "Examples",
          items: [
            { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "Runtime API Examples", link: "/api-examples" }
          ]
        }
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/vuejs/vitepress" }
      ]
    },
    vite: {
      ssr: {
        noExternal: ["@escook/vitepress-theme", "vitepress"]
      }
    }
  };
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2huLXhjL3dvcmsvVnVlT2JqL3RnYWktZG9jcy9kb2NzLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jaG4teGMvd29yay9WdWVPYmovdGdhaS1kb2NzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jaG4teGMvd29yay9WdWVPYmovdGdhaS1kb2NzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnV2l0aFRoZW1lIH0gZnJvbSAndml0ZXByZXNzJ1xuaW1wb3J0IGVzY29va0NvbmZpZyBmcm9tICdAZXNjb29rL3ZpdGVwcmVzcy10aGVtZS9jb25maWcnXG5cblxuLy8gY29uc3QgbGFuZ3VhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhbmd1YWdlXCIpXG4vLyBjb25zb2xlLmxvZygnbGFuZ3VhZ2U6JywgbGFuZ3VhZ2UpXG5cbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZ1dpdGhUaGVtZSgoKT0+e1xuICBjb25zdCBjb29raWVMYW5nID0gcmVxLmhlYWRlcnMuY29va2llLm1hdGNoKC9sYW5ndWFnZT0oXFx3Kyk7Py8pO1xuICBjb25zb2xlLmxvZygnY29va2llTGFuZzonLCBjb29raWVMYW5nKVxuICByZXR1cm4ge1xuICBleHRlbmRzOiBlc2Nvb2tDb25maWcsXG4gIHRpdGxlOiBcIlRHQUlcIixcbiAgZGVzY3JpcHRpb246IFwiXCIsXG4gIGhlYWQ6IFtbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2xvZ28uanBnJyB9XV0sXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgY29uZmV0dGk6IGZhbHNlLFxuICAgIC8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS1jb25maWdcbiAgICBuYXY6IFtcbiAgICAgIHtjb21wb25lbnQ6J1NlbGVjdExhbmd1YWdlJ30sXG4gICAgICB7IHRleHQ6ICdIb21lJywgbGluazogJy8nIH0sXG4gICAgICB7IHRleHQ6ICdFeGFtcGxlcycsIGxpbms6ICcvbWFya2Rvd24tZXhhbXBsZXMnIH1cbiAgICBdLFxuXG4gICAgc2lkZWJhcjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ01hcmtkb3duIEV4YW1wbGVzJywgbGluazogJy9tYXJrZG93bi1leGFtcGxlcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdSdW50aW1lIEFQSSBFeGFtcGxlcycsIGxpbms6ICcvYXBpLWV4YW1wbGVzJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdml0ZXByZXNzJyB9XG4gICAgXVxuICB9LFxuICB2aXRlOntcbiAgICBzc3I6e1xuICAgICAgbm9FeHRlcm5hbDpbJ0Blc2Nvb2svdml0ZXByZXNzLXRoZW1lJywndml0ZXByZXNzJ11cbiAgICB9XG4gIH1cbn19KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVSxTQUFTLDZCQUE2QjtBQUN6VyxPQUFPLGtCQUFrQjtBQU96QixJQUFPLGlCQUFRLHNCQUFzQixNQUFJO0FBQ3ZDLFFBQU0sYUFBYSxJQUFJLFFBQVEsT0FBTyxNQUFNLGtCQUFrQjtBQUM5RCxVQUFRLElBQUksZUFBZSxVQUFVO0FBQ3JDLFNBQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxZQUFZLENBQUMsQ0FBQztBQUFBLElBQ25ELGFBQWE7QUFBQSxNQUNYLFVBQVU7QUFBQTtBQUFBLE1BRVYsS0FBSztBQUFBLFFBQ0gsRUFBQyxXQUFVLGlCQUFnQjtBQUFBLFFBQzNCLEVBQUUsTUFBTSxRQUFRLE1BQU0sSUFBSTtBQUFBLFFBQzFCLEVBQUUsTUFBTSxZQUFZLE1BQU0scUJBQXFCO0FBQUEsTUFDakQ7QUFBQSxNQUVBLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTCxFQUFFLE1BQU0scUJBQXFCLE1BQU0scUJBQXFCO0FBQUEsWUFDeEQsRUFBRSxNQUFNLHdCQUF3QixNQUFNLGdCQUFnQjtBQUFBLFVBQ3hEO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUVBLGFBQWE7QUFBQSxRQUNYLEVBQUUsTUFBTSxVQUFVLE1BQU0scUNBQXFDO0FBQUEsTUFDL0Q7QUFBQSxJQUNGO0FBQUEsSUFDQSxNQUFLO0FBQUEsTUFDSCxLQUFJO0FBQUEsUUFDRixZQUFXLENBQUMsMkJBQTBCLFdBQVc7QUFBQSxNQUNuRDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUMsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
