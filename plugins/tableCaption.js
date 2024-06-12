const plugin = require("tailwindcss/plugin");

const tableCaption = plugin(function ({ addUtilities }) {
  addUtilities({
    ".caption-bottom": {
      captionSide: "bottom",
    },
    ".caption-top": {
      captionSide: "top",
    },
  });
});

module.exports = tableCaption;
