// docs/.vitepress/config.mts
import { defineConfigWithTheme } from "file:///Users/chn-xc/work/VueObj/tgai-docs/.yarn/__virtual__/vitepress-virtual-9e441ace20/4/.yarn/berry/cache/vitepress-npm-1.3.4-0f6dbdfb16-10c0.zip/node_modules/vitepress/dist/node/index.js";
import escookConfig from "file:///Users/chn-xc/.yarn/berry/cache/@escook-vitepress-theme-npm-1.3.1-cb0c33ffdd-10c0.zip/node_modules/@escook/vitepress-theme/dist/config.js";
var language = localStorage.getItem("language");
console.log("language:", language);
var one = {
  text: "Examples",
  items: [
    { text: `${language}`, link: "/markdown-examples" },
    { text: "Runtime API Examples", link: "/api-examples" }
  ]
};
var config_default = defineConfigWithTheme({
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
      one
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
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2huLXhjL3dvcmsvVnVlT2JqL3RnYWktZG9jcy9kb2NzLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jaG4teGMvd29yay9WdWVPYmovdGdhaS1kb2NzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jaG4teGMvd29yay9WdWVPYmovdGdhaS1kb2NzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnV2l0aFRoZW1lIH0gZnJvbSAndml0ZXByZXNzJ1xuaW1wb3J0IGVzY29va0NvbmZpZyBmcm9tICdAZXNjb29rL3ZpdGVwcmVzcy10aGVtZS9jb25maWcnXG5cblxuY29uc3QgbGFuZ3VhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhbmd1YWdlXCIpXG5jb25zb2xlLmxvZygnbGFuZ3VhZ2U6JywgbGFuZ3VhZ2UpXG5jb25zdCBvbmUgPSB7XG4gIHRleHQ6ICdFeGFtcGxlcycsXG4gIGl0ZW1zOiBbXG4gICAgeyB0ZXh0OiBgJHtsYW5ndWFnZX1gLCBsaW5rOiAnL21hcmtkb3duLWV4YW1wbGVzJyB9LFxuICAgIHsgdGV4dDogJ1J1bnRpbWUgQVBJIEV4YW1wbGVzJywgbGluazogJy9hcGktZXhhbXBsZXMnIH1cbiAgXVxufVxuXG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWdXaXRoVGhlbWUoe1xuICBleHRlbmRzOiBlc2Nvb2tDb25maWcsXG4gIHRpdGxlOiBcIlRHQUlcIixcbiAgZGVzY3JpcHRpb246IFwiXCIsXG4gIGhlYWQ6IFtbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2xvZ28uanBnJyB9XV0sXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgY29uZmV0dGk6IGZhbHNlLFxuICAgIC8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS1jb25maWdcbiAgICBuYXY6IFtcbiAgICAgIHtjb21wb25lbnQ6J1NlbGVjdExhbmd1YWdlJ30sXG4gICAgICB7IHRleHQ6ICdIb21lJywgbGluazogJy8nIH0sXG4gICAgICB7IHRleHQ6ICdFeGFtcGxlcycsIGxpbms6ICcvbWFya2Rvd24tZXhhbXBsZXMnIH1cbiAgICBdLFxuXG4gICAgc2lkZWJhcjogW1xuICAgICAgb25lXG4gICAgXSxcblxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3ZpdGVwcmVzcycgfVxuICAgIF1cbiAgfSxcbiAgdml0ZTp7XG4gICAgc3NyOntcbiAgICAgIG5vRXh0ZXJuYWw6WydAZXNjb29rL3ZpdGVwcmVzcy10aGVtZScsJ3ZpdGVwcmVzcyddXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVSxTQUFTLDZCQUE2QjtBQUN6VyxPQUFPLGtCQUFrQjtBQUd6QixJQUFNLFdBQVcsYUFBYSxRQUFRLFVBQVU7QUFDaEQsUUFBUSxJQUFJLGFBQWEsUUFBUTtBQUNqQyxJQUFNLE1BQU07QUFBQSxFQUNWLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLEVBQUUsTUFBTSxHQUFHLFFBQVEsSUFBSSxNQUFNLHFCQUFxQjtBQUFBLElBQ2xELEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxnQkFBZ0I7QUFBQSxFQUN4RDtBQUNGO0FBR0EsSUFBTyxpQkFBUSxzQkFBc0I7QUFBQSxFQUNuQyxTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sWUFBWSxDQUFDLENBQUM7QUFBQSxFQUNuRCxhQUFhO0FBQUEsSUFDWCxVQUFVO0FBQUE7QUFBQSxJQUVWLEtBQUs7QUFBQSxNQUNILEVBQUMsV0FBVSxpQkFBZ0I7QUFBQSxNQUMzQixFQUFFLE1BQU0sUUFBUSxNQUFNLElBQUk7QUFBQSxNQUMxQixFQUFFLE1BQU0sWUFBWSxNQUFNLHFCQUFxQjtBQUFBLElBQ2pEO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxJQUVBLGFBQWE7QUFBQSxNQUNYLEVBQUUsTUFBTSxVQUFVLE1BQU0scUNBQXFDO0FBQUEsSUFDL0Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFLO0FBQUEsSUFDSCxLQUFJO0FBQUEsTUFDRixZQUFXLENBQUMsMkJBQTBCLFdBQVc7QUFBQSxJQUNuRDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
