// docs/.vitepress/config.mts
import { defineConfigWithTheme } from "file:///Users/chn-xc/work/VueObj/tgai-docs/.yarn/__virtual__/vitepress-virtual-9e441ace20/4/.yarn/berry/cache/vitepress-npm-1.3.4-0f6dbdfb16-10c0.zip/node_modules/vitepress/dist/node/index.js";
import escookConfig from "file:///Users/chn-xc/.yarn/berry/cache/@escook-vitepress-theme-npm-1.3.1-cb0c33ffdd-10c0.zip/node_modules/@escook/vitepress-theme/dist/config.js";
var language = localStorage.getItem("language");
var config_default = defineConfigWithTheme(() => {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2huLXhjL3dvcmsvVnVlT2JqL3RnYWktZG9jcy9kb2NzLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jaG4teGMvd29yay9WdWVPYmovdGdhaS1kb2NzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jaG4teGMvd29yay9WdWVPYmovdGdhaS1kb2NzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnV2l0aFRoZW1lIH0gZnJvbSAndml0ZXByZXNzJ1xuaW1wb3J0IGVzY29va0NvbmZpZyBmcm9tICdAZXNjb29rL3ZpdGVwcmVzcy10aGVtZS9jb25maWcnXG5cblxuY29uc3QgbGFuZ3VhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhbmd1YWdlXCIpXG5cbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZ1dpdGhUaGVtZSgoKT0+e1xuY29uc29sZS5sb2coJ2xhbmd1YWdlOicsIGxhbmd1YWdlKVxuICBcbiAgcmV0dXJuIHtcbiAgZXh0ZW5kczogZXNjb29rQ29uZmlnLFxuICB0aXRsZTogXCJUR0FJXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlwiLFxuICBoZWFkOiBbWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9sb2dvLmpwZycgfV1dLFxuICB0aGVtZUNvbmZpZzoge1xuICAgIGNvbmZldHRpOiBmYWxzZSxcbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXG4gICAgbmF2OiBbXG4gICAgICB7Y29tcG9uZW50OidTZWxlY3RMYW5ndWFnZSd9LFxuICAgICAgeyB0ZXh0OiAnSG9tZScsIGxpbms6ICcvJyB9LFxuICAgICAgeyB0ZXh0OiAnRXhhbXBsZXMnLCBsaW5rOiAnL21hcmtkb3duLWV4YW1wbGVzJyB9XG4gICAgXSxcblxuICAgIHNpZGViYXI6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdNYXJrZG93biBFeGFtcGxlcycsIGxpbms6ICcvbWFya2Rvd24tZXhhbXBsZXMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUnVudGltZSBBUEkgRXhhbXBsZXMnLCBsaW5rOiAnL2FwaS1leGFtcGxlcycgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcblxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3ZpdGVwcmVzcycgfVxuICAgIF1cbiAgfSxcbiAgdml0ZTp7XG4gICAgc3NyOntcbiAgICAgIG5vRXh0ZXJuYWw6WydAZXNjb29rL3ZpdGVwcmVzcy10aGVtZScsJ3ZpdGVwcmVzcyddXG4gICAgfVxuICB9XG59fSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVUsU0FBUyw2QkFBNkI7QUFDelcsT0FBTyxrQkFBa0I7QUFHekIsSUFBTSxXQUFXLGFBQWEsUUFBUSxVQUFVO0FBR2hELElBQU8saUJBQVEsc0JBQXNCLE1BQUk7QUFDekMsVUFBUSxJQUFJLGFBQWEsUUFBUTtBQUUvQixTQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sWUFBWSxDQUFDLENBQUM7QUFBQSxJQUNuRCxhQUFhO0FBQUEsTUFDWCxVQUFVO0FBQUE7QUFBQSxNQUVWLEtBQUs7QUFBQSxRQUNILEVBQUMsV0FBVSxpQkFBZ0I7QUFBQSxRQUMzQixFQUFFLE1BQU0sUUFBUSxNQUFNLElBQUk7QUFBQSxRQUMxQixFQUFFLE1BQU0sWUFBWSxNQUFNLHFCQUFxQjtBQUFBLE1BQ2pEO0FBQUEsTUFFQSxTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFlBQ0wsRUFBRSxNQUFNLHFCQUFxQixNQUFNLHFCQUFxQjtBQUFBLFlBQ3hELEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxnQkFBZ0I7QUFBQSxVQUN4RDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFFQSxhQUFhO0FBQUEsUUFDWCxFQUFFLE1BQU0sVUFBVSxNQUFNLHFDQUFxQztBQUFBLE1BQy9EO0FBQUEsSUFDRjtBQUFBLElBQ0EsTUFBSztBQUFBLE1BQ0gsS0FBSTtBQUFBLFFBQ0YsWUFBVyxDQUFDLDJCQUEwQixXQUFXO0FBQUEsTUFDbkQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFDLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
