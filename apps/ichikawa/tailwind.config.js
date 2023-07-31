// tailwind config is required for editor support

const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  presets: [sharedConfig],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#161616",
        },
        secondary: {
          light: "#59d3d4",
          DEFAULT: "#282828",
        },
      },
    },
  },
};
