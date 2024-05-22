import { content, plugin } from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", content()],
  theme: {
    extend: {},
  },
  plugins: [plugin()],
};
