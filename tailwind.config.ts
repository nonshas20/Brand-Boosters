import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Mind-blowing brand colors
        brand: {
          purple: "#8B5CF6",
          pink: "#EC4899", 
          blue: "#3B82F6",
          cyan: "#06B6D4",
          orange: "#F97316",
          emerald: "#10B981",
          indigo: "#6366F1",
          violet: "#8B5CF6",
        },
        neon: {
          purple: "#A855F7",
          pink: "#F472B6", 
          blue: "#60A5FA",
          cyan: "#22D3EE",
          green: "#4ADE80",
          yellow: "#FBBF24",
        },
        electric: {
          blue: "#0066FF",
          purple: "#6D28D9",
          pink: "#DB2777",
          cyan: "#0891B2",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-40px)" },
        },
        "glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "gradient-y": {
          "0%, 100%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 100%" },
        },
        "gradient-xy": {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "25%": { backgroundPosition: "100% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "75%": { backgroundPosition: "0% 100%" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(-5%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" },
          "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" },
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "morph": {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-left": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "rotate-in": {
          "0%": { transform: "rotate(-180deg) scale(0)", opacity: "0" },
          "100%": { transform: "rotate(0deg) scale(1)", opacity: "1" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite", 
        "gradient-xy": "gradient-xy 15s ease infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "bounce-slow": "bounce-slow 3s infinite",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "morph": "morph 8s ease-in-out infinite",
        "slide-up": "slide-up 0.8s ease-out",
        "slide-down": "slide-down 0.8s ease-out",
        "slide-left": "slide-left 0.8s ease-out",
        "slide-right": "slide-right 0.8s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
        "rotate-in": "rotate-in 0.8s ease-out",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'electric-gradient': 'linear-gradient(45deg, #0066FF, #6D28D9, #DB2777, #0891B2)',
        'neon-gradient': 'linear-gradient(45deg, #A855F7, #F472B6, #60A5FA, #22D3EE)',
        'cosmic-gradient': 'radial-gradient(ellipse at center, #8B5CF6 0%, #3B82F6 25%, #EC4899 50%, #8B5CF6 75%, #3B82F6 100%)',
        'aurora-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(139, 92, 246, 0.6)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.6)',
        'neon-blue': '0 0 20px rgba(59, 130, 246, 0.6)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.6)',
        'neon-green': '0 0 20px rgba(16, 185, 129, 0.6)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-strong': '0 8px 32px 0 rgba(31, 38, 135, 0.5)',
        'electric': '0 0 30px rgba(0, 102, 255, 0.7)',
        'cosmic': '0 0 40px rgba(139, 92, 246, 0.8)',
        'ultra-glow': '0 0 60px rgba(139, 92, 246, 0.4), 0 0 100px rgba(236, 72, 153, 0.2)',
        'mega-glow': '0 0 80px rgba(59, 130, 246, 0.6), 0 0 120px rgba(139, 92, 246, 0.4), 0 0 160px rgba(236, 72, 153, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
} satisfies Config;