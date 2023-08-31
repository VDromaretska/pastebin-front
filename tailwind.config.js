// /** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
    content: ["./src/*/.{js,ts,jsx,tsx}"],
    theme: {
        daisyui: {
            themes: ["light", "night", "cupcake", "synthwave"],
        },
        extend: {},
    },
    plugins: [require("tailwindcss"), daisyui],
};
