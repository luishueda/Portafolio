/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: '#020617',
                accent: '#10b981',
                accentDark: '#059669',
                accentLight: '#34d399',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui'],
                display: ['Space Grotesk', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
