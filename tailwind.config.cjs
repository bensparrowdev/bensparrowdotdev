/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '0rem'
			},
			center: true
		},
		colors: {
			primary: '#021013',
			secondary: '#FFFDFC',
			accent: '#DCEEEE',
			accent2: '#7AFFF2',
			body: '#545454',
			primary_dark: '#E1E1E1',
			secondary_dark: '#041F25',
			accent_dark: '#213939',
			accent2_dark: '#008F81',
			body_dark: '#C6C6C6',
			bg_text_dark: '#062B3A',
			invisible: '#FFFFFF00'
		},
		extend: {
			fontFamily: {
				eb_Garamond: ['EB Garamond', 'serif'],
				poppins: ['Poppins', 'sans- serif'],
				ubuntu_mono: ['Ubuntu Mono', 'monospace']
			}
		},
	},
	plugins: [],
}
