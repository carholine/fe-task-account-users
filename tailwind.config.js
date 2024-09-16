/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '18px'],
      sm: ['14px', '21px']
    },
    extend: {
      boxShadow: {
        'xs': '0px 1px 2px 0px rgba(45, 55, 72, 0.08)',
      },
      colors: {
        c: {
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
            gray: {
              50: '#A0AEC0',
              100: '#4A5568'
            }
          },
          bg: {
            main: '#EDF2F7',
            gray: '#F7FAFC'
          },
          accent: '#F7FAFC',
          btn: {
            primary: '#475DE5',
            icon: 'rgba(160, 174, 192, 1)'
          },
          shadow: 'rgba(45, 55, 72, 0.08)'
        }
      },
    },
  },
  plugins: [],
}

