// Imports the necessary functions from Vite
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Exports the configuration
export default defineConfig({
  // Defines plugins to be used by Vite
  plugins: [react()],
  // Frontend server configuration to establish what the client sees
  server: {
    port: 3000,
    open: true,
    // Backend server configuration to handle database API requests
    proxy: {
      "/graphql": {
        target: "http://localhost:3001",
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
