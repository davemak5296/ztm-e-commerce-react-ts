// import type { UserConfigFn, UserConfig } from "vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// import legacy from "@vitejs/plugin-legacy";
// import tsconfigPaths from "vite-tsconfig-paths";
// import mkcert from "vite-plugin-mkcert";

export default defineConfig({
    server: {
      https: true,
    },
    plugins: [
      svgr(), react(),
      // tsconfigPaths(),
      // legacy(),
      // mkcert({
      //   source: "coding",
      // }),
    ],
});
// const defineConfig: UserConfigFn = ({ command, mode }) => {
//   const config: UserConfig = {
//     server: {
//       https: true,
//     },
//     plugins: [
//       react(),
//       tsconfigPaths(),
//       legacy(),
//       mkcert({
//         source: "coding",
//       }),
//     ],
//     // build: {
//     //   rollupOptions: {
//     //     output: {
//     //       manualChunks: {
//     //         react: ["react"],
//     //         "react-dom": ["react-dom"],
//     //       },
//     //     },
//     //   },
//     // },
//   };
//   return config;
// };

// export default defineConfig;

