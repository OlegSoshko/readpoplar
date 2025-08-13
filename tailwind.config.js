/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,vue}", "./index.html"],
	theme: {
		extend: {
			screens: {
				xl: "1260px",
			},
			fontFamily: {
				"pt-narrow": ['"PT Sans Narrow"', "sans-serif"],
			},
		},
	},
	plugins: [],
};
