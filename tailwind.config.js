/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          500: '#667eea',
          600: '#764ba2',
          700: '#1e3c72',
          800: '#2a5298',
          900: '#222e50',
        },
        gold: {
          400: '#ffed4e',
          500: '#ffd700',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 1.2s ease-out',
        'slide-in-left': 'slideInLeft 1.2s ease-out',
        'slide-in-right': 'slideInRight 1.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease-in-out infinite',
        'ripple': 'ripple-animation 0.6s linear',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(102, 126, 234, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(102, 126, 234, 0.6)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'ripple-animation': {
          'to': { transform: 'scale(4)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
