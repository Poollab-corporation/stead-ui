// vite.config.ts
import * as path from "path";
import { defineConfig } from "file:///C:/BOM/BOM_WEB/company/Pool_Lab/projects/stead-ui/node_modules/vite/dist/node/index.js";
import react from "file:///C:/BOM/BOM_WEB/company/Pool_Lab/projects/stead-ui/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///C:/BOM/BOM_WEB/company/Pool_Lab/projects/stead-ui/node_modules/vite-plugin-dts/dist/index.mjs";
import libCss from "file:///C:/BOM/BOM_WEB/company/Pool_Lab/projects/stead-ui/node_modules/vite-plugin-libcss/index.js";
import { vanillaExtractPlugin } from "file:///C:/BOM/BOM_WEB/company/Pool_Lab/projects/stead-ui/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
var __vite_injected_original_dirname = "C:\\BOM\\BOM_WEB\\company\\Pool_Lab\\projects\\stead-ui";
var vite_config_default = defineConfig({
  assetsInclude: ["/sb-preview/runtime.js"],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/lib/index.ts"),
      name: "react-carousel-image-optimized",
      formats: ["es", "umd", "cjs"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", "**/*.stories.ts", "**/*.stories.tsx", "stories/**/*"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    },
    commonjsOptions: {
      esmExternals: ["react"]
    }
  },
  plugins: [
    vanillaExtractPlugin(),
    react(),
    dts({
      insertTypesEntry: true
    }),
    libCss()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxCT01cXFxcQk9NX1dFQlxcXFxjb21wYW55XFxcXFBvb2xfTGFiXFxcXHByb2plY3RzXFxcXHN0ZWFkLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxCT01cXFxcQk9NX1dFQlxcXFxjb21wYW55XFxcXFBvb2xfTGFiXFxcXHByb2plY3RzXFxcXHN0ZWFkLXVpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9CT00vQk9NX1dFQi9jb21wYW55L1Bvb2xfTGFiL3Byb2plY3RzL3N0ZWFkLXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcclxuaW1wb3J0IGxpYkNzcyBmcm9tICd2aXRlLXBsdWdpbi1saWJjc3MnXHJcbmltcG9ydCB7IHZhbmlsbGFFeHRyYWN0UGx1Z2luIH0gZnJvbSAnQHZhbmlsbGEtZXh0cmFjdC92aXRlLXBsdWdpbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYXNzZXRzSW5jbHVkZTogWycvc2ItcHJldmlldy9ydW50aW1lLmpzJ10sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9saWIvaW5kZXgudHMnKSxcclxuICAgICAgbmFtZTogJ3JlYWN0LWNhcm91c2VsLWltYWdlLW9wdGltaXplZCcsXHJcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJywgJ2NqcyddLFxyXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nLCAnKiovKi5zdG9yaWVzLnRzJywgJyoqLyouc3Rvcmllcy50c3gnLCAnc3Rvcmllcy8qKi8qJ10sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxyXG4gICAgICAgICAgJ3JlYWN0LWRvbSc6ICdSZWFjdERPTScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb21tb25qc09wdGlvbnM6IHtcclxuICAgICAgZXNtRXh0ZXJuYWxzOiBbJ3JlYWN0J10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgdmFuaWxsYUV4dHJhY3RQbHVnaW4oKSxcclxuICAgIHJlYWN0KCksXHJcbiAgICBkdHMoe1xyXG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxyXG4gICAgfSksXHJcbiAgICBsaWJDc3MoKSxcclxuICBdLFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1WLFlBQVksVUFBVTtBQUV6VyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixTQUFTLDRCQUE0QjtBQU5yQyxJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixlQUFlLENBQUMsd0JBQXdCO0FBQUEsRUFDeEMsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBVSxhQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQVksYUFBUSxrQ0FBVyxrQkFBa0I7QUFBQSxNQUNqRCxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxPQUFPLEtBQUs7QUFBQSxNQUM1QixVQUFVLENBQUMsV0FBVyxTQUFTLE1BQU07QUFBQSxJQUN2QztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsYUFBYSxtQkFBbUIsb0JBQW9CLGNBQWM7QUFBQSxNQUN0RixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxpQkFBaUI7QUFBQSxNQUNmLGNBQWMsQ0FBQyxPQUFPO0FBQUEsSUFDeEI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxxQkFBcUI7QUFBQSxJQUNyQixNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxJQUNwQixDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsRUFDVDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
