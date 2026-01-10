import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-black": "#0D0D0D",
        "neon-violet": "#8B5CF6",
        "electric-blue": "#3B82F6",
      },
    },
  },
} satisfies Config;
