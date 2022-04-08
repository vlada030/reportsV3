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
                }
            },

            backgroundImage: {
                'login-hero': "url(/src/assets/pogon-3.JPG)"
            }
        },
    },
    plugins: [],
};
