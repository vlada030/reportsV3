module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                tfkable: {
                    700: "#00623a",
                    500: "#12a767",
                    300: "#85c39a",
                },

                fkz: {
                    700: "#ff6600",
                    500: "#f7a206",
                    300: "#f9ba0d",
                    100: "#f8e2a5",
                },
            },

            backgroundImage: {
                "login-hero": "url(/src/assets/pogon-3.JPG)",
                "login-form": "url(/src/assets/pogon-7.JPG)",
            },
        },
    },
    plugins: [],
};
