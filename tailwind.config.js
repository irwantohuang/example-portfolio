/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        container: {
            padding: {
                DEFAULT: '16px'
            }
        },
        fontFamily: {
            primary: "Nunito Sans",
            secondary: "JetBrains Mono"
        },
        extend: {
            backgroundImage: {
                'hero': "url('/src/assets/hero.svg')",
                'hero-dark': "url('/src/assets/hero-dark.svg')"
            },
            colors: {
                primary: {
                    DEFAULT: '#0077C2',
                    '200': '#59a5f5',
                    '300': '#c8ffff',
                },
                accent: {
                    DEFAULT: '#00BFFF',
                    secondary: '#00619a'
                },
                textColor: {
                    DEFAULT: '#333333',
                    secondary: '#5c5c5c'
                },
                backgroundColor: {
                    DEFAULT: '#FFFFFF',
                    'dark': '#1E1E1E',
                    '200': '#f5f5f5',
                    '300': '#cccccc'
                }
            }
        },
    },
    plugins: [],
}