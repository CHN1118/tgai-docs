// docs/.vitepress/config.mts
import { defineConfigWithTheme } from "file:///Users/chn-xc/work/VueObj/tgai-docs/.yarn/__virtual__/vitepress-virtual-9e441ace20/4/.yarn/berry/cache/vitepress-npm-1.3.4-0f6dbdfb16-10c0.zip/node_modules/vitepress/dist/node/index.js";
import escookConfig from "file:///Users/chn-xc/.yarn/berry/cache/@escook-vitepress-theme-npm-1.3.1-cb0c33ffdd-10c0.zip/node_modules/@escook/vitepress-theme/dist/config.js";
var config_default = defineConfigWithTheme(() => {
  const language = document.cookie;
  console.log("language:", language);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2huLXhjL3dvcmsvVnVlT2JqL3RnYWktZG9jcy9kb2NzLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jaG4teGMvd29yay9WdWVPYmovdGdhaS1kb2NzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jaG4teGMvd29yay9WdWVPYmovdGdhaS1kb2NzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnV2l0aFRoZW1lIH0gZnJvbSAndml0ZXByZXNzJ1xuaW1wb3J0IGVzY29va0NvbmZpZyBmcm9tICdAZXNjb29rL3ZpdGVwcmVzcy10aGVtZS9jb25maWcnXG5cblxuXG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWdXaXRoVGhlbWUoKCk9PntcbiAgXG5jb25zdCBsYW5ndWFnZSA9IGRvY3VtZW50LmNvb2tpZVxuY29uc29sZS5sb2coJ2xhbmd1YWdlOicsIGxhbmd1YWdlKVxuICByZXR1cm4ge1xuICBleHRlbmRzOiBlc2Nvb2tDb25maWcsXG4gIHRpdGxlOiBcIlRHQUlcIixcbiAgZGVzY3JpcHRpb246IFwiXCIsXG4gIGhlYWQ6IFtbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2xvZ28uanBnJyB9XV0sXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgY29uZmV0dGk6IGZhbHNlLFxuICAgIC8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS1jb25maWdcbiAgICBuYXY6IFtcbiAgICAgIHtjb21wb25lbnQ6J1NlbGVjdExhbmd1YWdlJ30sXG4gICAgICB7IHRleHQ6ICdIb21lJywgbGluazogJy8nIH0sXG4gICAgICB7IHRleHQ6ICdFeGFtcGxlcycsIGxpbms6ICcvbWFya2Rvd24tZXhhbXBsZXMnIH1cbiAgICBdLFxuXG4gICAgc2lkZWJhcjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ01hcmtkb3duIEV4YW1wbGVzJywgbGluazogJy9tYXJrZG93bi1leGFtcGxlcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdSdW50aW1lIEFQSSBFeGFtcGxlcycsIGxpbms6ICcvYXBpLWV4YW1wbGVzJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdml0ZXByZXNzJyB9XG4gICAgXVxuICB9LFxuICB2aXRlOntcbiAgICBzc3I6e1xuICAgICAgbm9FeHRlcm5hbDpbJ0Blc2Nvb2svdml0ZXByZXNzLXRoZW1lJywndml0ZXByZXNzJ11cbiAgICB9XG4gIH1cbn19KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVSxTQUFTLDZCQUE2QjtBQUN6VyxPQUFPLGtCQUFrQjtBQUt6QixJQUFPLGlCQUFRLHNCQUFzQixNQUFJO0FBRXpDLFFBQU0sV0FBVyxTQUFTO0FBQzFCLFVBQVEsSUFBSSxhQUFhLFFBQVE7QUFDL0IsU0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLFlBQVksQ0FBQyxDQUFDO0FBQUEsSUFDbkQsYUFBYTtBQUFBLE1BQ1gsVUFBVTtBQUFBO0FBQUEsTUFFVixLQUFLO0FBQUEsUUFDSCxFQUFDLFdBQVUsaUJBQWdCO0FBQUEsUUFDM0IsRUFBRSxNQUFNLFFBQVEsTUFBTSxJQUFJO0FBQUEsUUFDMUIsRUFBRSxNQUFNLFlBQVksTUFBTSxxQkFBcUI7QUFBQSxNQUNqRDtBQUFBLE1BRUEsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxZQUNMLEVBQUUsTUFBTSxxQkFBcUIsTUFBTSxxQkFBcUI7QUFBQSxZQUN4RCxFQUFFLE1BQU0sd0JBQXdCLE1BQU0sZ0JBQWdCO0FBQUEsVUFDeEQ7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BRUEsYUFBYTtBQUFBLFFBQ1gsRUFBRSxNQUFNLFVBQVUsTUFBTSxxQ0FBcUM7QUFBQSxNQUMvRDtBQUFBLElBQ0Y7QUFBQSxJQUNBLE1BQUs7QUFBQSxNQUNILEtBQUk7QUFBQSxRQUNGLFlBQVcsQ0FBQywyQkFBMEIsV0FBVztBQUFBLE1BQ25EO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQyxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
