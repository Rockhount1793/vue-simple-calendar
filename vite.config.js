import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
const path = require("path")

// Use this config file to build the libary

export default defineConfig({
	plugins: [vue()],
	build: {
		sourcemap: false,
		lib: {
			entry: path.resolve(__dirname, "lib/main.ts"),
			name: "CalendarView",
		},
		assetsInclude: ["**/*.css"],
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled into your library
			external: ["vue"],
			output: {
				// Provide global variables to use in the UMD build for externalized deps
				globals: {
					vue: "Vue",
				},
			},
		},
	},
})
