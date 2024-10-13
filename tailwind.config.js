/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{tsx,svg}",
        "./index.html"
    ],
    theme: {
        extend: {
            width: {
                "main": "var(--width-main)"
            },
            colors: {
                "color-1": "var(--color-1)",
                "color-2": "var(--color-2)",
                "color-3": "var(--color-3)",
                "color-4": "var(--color-4)",
                "accent": "var(--color-accent)",
                "glass": "var(--color-glass)"
            }
        }
    },
    plugins: []
}