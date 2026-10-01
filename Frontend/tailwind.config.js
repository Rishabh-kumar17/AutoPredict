export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#04060A',
          900: '#080B11',
          850: '#0C1018',
          800: '#111723',
          750: '#172030',
          700: '#1E293B',
          600: '#334155',
          500: '#475569'
        },
        electric: {
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0284C7',
          blue: '#2563EB',
          cyan: '#00F0FF',
          glow: '#3B82F6'
        },
        accent: {
          blue: '#3B82F6',
          indigo: '#6366F1',
          cyan: '#06B6D4'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.15), transparent 70%)'
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(59, 130, 246, 0.25)',
        'glow-md': '0 0 30px rgba(59, 130, 246, 0.35)',
        'glow-lg': '0 0 50px rgba(59, 130, 246, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
};