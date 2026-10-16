import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: { brand: { DEFAULT: '#205043', dark: '#00251e', red: '#ca3332', mist: '#f2f6f4' } },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], display: ['"Barlow Condensed"', 'Inter', 'sans-serif'] },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(-18px) rotate(3deg)' } },
        fadeUp: { from: { opacity: 0, transform: 'translateY(28px)' }, to: { opacity: 1, transform: 'none' } },
        draw: { from: { strokeDashoffset: 700 }, to: { strokeDashoffset: 0 } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        scan: { '0%': { transform: 'translateY(-10%)', opacity: 0 }, '10%,90%': { opacity: 1 }, '100%': { transform: 'translateY(110vh)', opacity: 0 } }
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        'fade-up': 'fadeUp .9s cubic-bezier(.2,.7,.2,1) both',
        draw: 'draw 3s ease-out forwards',
        marquee: 'marquee 35s linear infinite',
        scan: 'scan 7s linear infinite'
      }
    }
  }
}
