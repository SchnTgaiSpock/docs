const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'text': '#f3fcfa',
				'background': '#071217',
				'primary': '#2ca2d8',
				'secondary': '#09232f',
				'accent': '#d16533',
			},
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
