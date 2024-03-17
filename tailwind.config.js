/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				raleway: ['Raleway', 'sans-serif']
			},
			maxWidth: {
				"screen-3xl": "1920px"
			}
		}
	},
	plugins: []
};
