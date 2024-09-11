// docs/.vitepress/config.mts
import { defineConfigWithTheme } from "file:///Users/chn-xc/work/VueObj/tgai-docs/.yarn/__virtual__/vitepress-virtual-9e441ace20/4/.yarn/berry/cache/vitepress-npm-1.3.4-0f6dbdfb16-10c0.zip/node_modules/vitepress/dist/node/index.js";
import escookConfig from "file:///Users/chn-xc/.yarn/berry/cache/@escook-vitepress-theme-npm-1.3.1-cb0c33ffdd-10c0.zip/node_modules/@escook/vitepress-theme/dist/config.js";
var language = localStorage.getItem("language");
console.log("language:", language);
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
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2huLXhjL3dvcmsvVnVlT2JqL3RnYWktZG9jcy9kb2NzLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jaG4teGMvd29yay9WdWVPYmovdGdhaS1kb2NzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jaG4teGMvd29yay9WdWVPYmovdGdhaS1kb2NzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnV2l0aFRoZW1lIH0gZnJvbSAndml0ZXByZXNzJ1xuaW1wb3J0IGVzY29va0NvbmZpZyBmcm9tICdAZXNjb29rL3ZpdGVwcmVzcy10aGVtZS9jb25maWcnXG5cblxuY29uc3QgbGFuZ3VhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhbmd1YWdlXCIpXG5jb25zb2xlLmxvZygnbGFuZ3VhZ2U6JywgbGFuZ3VhZ2UpXG5cbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZ1dpdGhUaGVtZSh7XG4gIGV4dGVuZHM6IGVzY29va0NvbmZpZyxcbiAgdGl0bGU6IFwiVEdBSVwiLFxuICBkZXNjcmlwdGlvbjogXCJcIixcbiAgaGVhZDogW1snbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvbG9nby5qcGcnIH1dXSxcbiAgdGhlbWVDb25maWc6IHtcbiAgICBjb25mZXR0aTogZmFsc2UsXG4gICAgLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lLWNvbmZpZ1xuICAgIG5hdjogW1xuICAgICAge2NvbXBvbmVudDonU2VsZWN0TGFuZ3VhZ2UnfSxcbiAgICAgIHsgdGV4dDogJ0hvbWUnLCBsaW5rOiAnLycgfSxcbiAgICAgIHsgdGV4dDogJ0V4YW1wbGVzJywgbGluazogJy9tYXJrZG93bi1leGFtcGxlcycgfVxuICAgIF0sXG5cbiAgICBzaWRlYmFyOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdFeGFtcGxlcycsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnTWFya2Rvd24gRXhhbXBsZXMnLCBsaW5rOiAnL21hcmtkb3duLWV4YW1wbGVzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1J1bnRpbWUgQVBJIEV4YW1wbGVzJywgbGluazogJy9hcGktZXhhbXBsZXMnIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG5cbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92aXRlcHJlc3MnIH1cbiAgICBdXG4gIH0sXG4gIHZpdGU6e1xuICAgIHNzcjp7XG4gICAgICBub0V4dGVybmFsOlsnQGVzY29vay92aXRlcHJlc3MtdGhlbWUnLCd2aXRlcHJlc3MnXVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVUsU0FBUyw2QkFBNkI7QUFDelcsT0FBTyxrQkFBa0I7QUFHekIsSUFBTSxXQUFXLGFBQWEsUUFBUSxVQUFVO0FBQ2hELFFBQVEsSUFBSSxhQUFhLFFBQVE7QUFHakMsSUFBTyxpQkFBUSxzQkFBc0I7QUFBQSxFQUNuQyxTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sWUFBWSxDQUFDLENBQUM7QUFBQSxFQUNuRCxhQUFhO0FBQUEsSUFDWCxVQUFVO0FBQUE7QUFBQSxJQUVWLEtBQUs7QUFBQSxNQUNILEVBQUMsV0FBVSxpQkFBZ0I7QUFBQSxNQUMzQixFQUFFLE1BQU0sUUFBUSxNQUFNLElBQUk7QUFBQSxNQUMxQixFQUFFLE1BQU0sWUFBWSxNQUFNLHFCQUFxQjtBQUFBLElBQ2pEO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLHFCQUFxQixNQUFNLHFCQUFxQjtBQUFBLFVBQ3hELEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxnQkFBZ0I7QUFBQSxRQUN4RDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFFQSxhQUFhO0FBQUEsTUFDWCxFQUFFLE1BQU0sVUFBVSxNQUFNLHFDQUFxQztBQUFBLElBQy9EO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBSztBQUFBLElBQ0gsS0FBSTtBQUFBLE1BQ0YsWUFBVyxDQUFDLDJCQUEwQixXQUFXO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
