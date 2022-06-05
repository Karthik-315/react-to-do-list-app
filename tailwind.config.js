module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "font-nunito": ["Recursive", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
