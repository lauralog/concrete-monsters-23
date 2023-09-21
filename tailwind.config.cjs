/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,sass,scss,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	 	'./assets/**/*.{sass,scss,css}'
	],
	theme: {
		fontFamily:{
			display: ['PP Monument Extended', 'sans-serif'],
			mono: ['IBM Plex Mono', 'monospaced'],
			serif: ['IBM Plex Serif', 'serif'],
			sans: ['IBM Plex Sans', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [
		require('tailwind-scrollbar-hide')
	],
}
