/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                // We can customize specific colors here if needed to match the design exactly
                // For now, standard Tailwind colors (teal, purple, etc.) seem close enough
            },
        },
    },
    plugins: [],
}
