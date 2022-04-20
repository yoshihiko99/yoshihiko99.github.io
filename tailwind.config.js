module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    content: [],
    theme: {
        extend: {
            fontFamily: {
                logo: ['Square Peg'],
                ubuntu: ['Ubuntu'],
            },
            keyframes: {
                blink: {
                    "0%": {opacity: 0},
                },
            },
            animation: {
                blink: "blink 1.5s steps(2) infinite",
            },
        },
    },
    plugins: [],
}
