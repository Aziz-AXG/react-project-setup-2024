import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifest: VitePWAOptions = {
  registerType: "autoUpdate",
  includeAssets: ["**/*"],
  srcDir: "src",
  filename: "service-worker.js",
  strategies: "injectManifest",
  injectRegister: "auto",
  devOptions: {
    enabled: true,
  },
  workbox: {
    clientsClaim: true,
    skipWaiting: true,
    globPatterns: ["**/*"],
  },
  manifest: {
    short_name: "react-project-setup",
    name: "react-project-setup",
    icons: [
      {
        src: "icon.svg",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "icon.svg",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    start_url: ".",
    display: "standalone",
    theme_color: "#1c1c1c",
    background_color: "#141414",
  },
  minify: false,
  injectManifest: {
    injectionPoint: null,
  },
  includeManifestIcons: false,
  disable: false,
};

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        secure: false,
      },
    },
  },
  plugins: [react(), VitePWA(manifest)],
  build: { chunkSizeWarningLimit: 500 },
});
