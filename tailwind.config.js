/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '18px'],
      sm: ['14px', '21px'],
      l: ['16px', '24px'],
      xl: ['18px', '27px']
    },
    extend: {
      gridTemplateColumns: {
        '3col': '1fr 149px 110px',
      },
      boxShadow: {
        'xs': '0px 1px 2px 0px rgba(45, 55, 72, 0.08)'
      },
      colors: {
        c: {
          blue: {
            100: '#475DE5',
            200: '#3546B0',
            300: '#2A388C'
          },
          gray: {
            50: '#CBD5E0',
            100: '#A0AEC0',
            200: '#4A5568'
          },
          border: '#E2E8F0',
          badge: {
            blue: {
              50: '#C8E7F9',
              100: '#2C5282'
            },
            red: {
              50: '#FEDDE6',
              100: '#922B6C'
            },
            purple: {
              50: '#EFE2FE',
              100: '#574195'
            },
            yellow: {
              50: '#FEEBC8',
              100: '#91472C'
            }
          },
          text: {
            primary: '#1A202C',
            secondary: '#718096',
            hover: '#2D3748',
          },
          bg: {
            main: '#EDF2F7',
            gray: '#F7FAFC'
          }
        }
      },
    },
  },
  plugins: [],
}

