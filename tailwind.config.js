/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
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
                'hero': "url('./src/assets/hero.svg')"
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
                    '200': '#f5f5f5',
                    '300': '#cccccc'
                }
            }
        },
    },
    plugins: [],
}

// --primary-100:#0077C2;
// --primary-200:#59a5f5;
// --primary-300:#c8ffff;
// --accent-100:#00BFFF;
// --accent-200:#00619a;
// --text-100:#333333;
// --text-200:#5c5c5c;
// --bg-100:#FFFFFF;
// --bg-200:#f5f5f5;
// --bg-300:#cccccc;
  


// --primary-100:#d4eaf7;
// --primary-200:#b6ccd8;
// --primary-300:#3b3c3d;
// --accent-100:#71c4ef;
// --accent-200:#00668c;
// --text-100:#1d1c1c;
// --text-200:#313d44;
// --bg-100:#fffefb;
// --bg-200:#f5f4f1;
// --bg-300:#cccbc8;