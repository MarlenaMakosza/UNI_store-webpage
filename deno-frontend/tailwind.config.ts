import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#7C3AED",
        "primary-dark": "#6D28D9",
        "secondary": "#2563EB",
        "bg-light": "#FAFAFA",
        "bg-card": "#FFFFFF",
        "text-primary": "#1F2937",
        "text-secondary": "#6B7280",
        "border-light": "#E5E7EB",
      },
    },
  },
} satisfies Config;
