import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        quantum: {
          50: "hsl(var(--quantum-50))",
          100: "hsl(var(--quantum-100))",
          200: "hsl(var(--quantum-200))",
          300: "hsl(var(--quantum-300))",
          400: "hsl(var(--quantum-400))",
          500: "hsl(var(--quantum-500))",
          600: "hsl(var(--quantum-600))",
          700: "hsl(var(--quantum-700))",
          800: "hsl(var(--quantum-800))",
          900: "hsl(var(--quantum-900))",
          950: "hsl(var(--quantum-950))",
        },
        neural: {
          50: "hsl(var(--neural-50))",
          100: "hsl(var(--neural-100))",
          200: "hsl(var(--neural-200))",
          300: "hsl(var(--neural-300))",
          400: "hsl(var(--neural-400))",
          500: "hsl(var(--neural-500))",
          600: "hsl(var(--neural-600))",
          700: "hsl(var(--neural-700))",
          800: "hsl(var(--neural-800))",
          900: "hsl(var(--neural-900))",
          950: "hsl(var(--neural-950))",
        },
        algorand: {
          50: "hsl(var(--algorand-50))",
          100: "hsl(var(--algorand-100))",
          200: "hsl(var(--algorand-200))",
          300: "hsl(var(--algorand-300))",
          400: "hsl(var(--algorand-400))",
          500: "hsl(var(--algorand-500))",
          600: "hsl(var(--algorand-600))",
          700: "hsl(var(--algorand-700))",
          800: "hsl(var(--algorand-800))",
          900: "hsl(var(--algorand-900))",
          950: "hsl(var(--algorand-950))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "glow": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.5",
            transform: "scale(1.05)",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.3",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "matrix": {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(100vh)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "matrix": "matrix 20s linear infinite",
      },
      backgroundImage: {
        "quantum-gradient": "linear-gradient(135deg, hsl(var(--quantum-500)), hsl(var(--neural-500)))",
        "neural-gradient": "linear-gradient(135deg, hsl(var(--neural-500)), hsl(var(--algorand-500)))",
        "mesh-gradient": "radial-gradient(circle at 25% 25%, hsl(var(--quantum-500)) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(var(--neural-500)) 0%, transparent 50%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
