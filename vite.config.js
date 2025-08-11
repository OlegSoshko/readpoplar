import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	build: {
		outDir: "./dist/client",
		emptyOutDir: true,
	},
	server: {
		port: 3000,
		open: true,
		host: true,
	},
	plugins: [
		vue(),
		tailwindcss({
			config: "./tailwind.config.js",
		}),
	],
});
