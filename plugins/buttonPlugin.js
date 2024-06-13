const plugin = require("tailwindcss/plugin");
const { default: lightOrDarkColor } = require("@check-light-or-dark/color");
const buttonPlugin = plugin(function ({
  addComponents,
  matchComponents,
  theme,
}) {
  addComponents({
    ".btn": {
      display: "inline-block",
      cursor: "pointer",
      fontWeight: "bold",
      padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
      borderRadius: theme("borderRadius.lg"),
    },
  });

  for (let key in theme("colors")) {
    if (typeof theme("colors")[key] !== "string") {
      for (let key2 in theme("colors")[key]) {
        const colorType = lightOrDarkColor(theme("colors")[key][key2]);
        addComponents({
          [`.btn-${key}-${key2}`]: {
            backgroundColor: theme("colors")[key][key2],
            color: colorType === "light" ? "black" : "white",
          },
        });
      }
    }
  }

  matchComponents({
    btn: (value) => {
      return {
        backgroundColor: value,
        color: lightOrDarkColor(value) === "light" ? "black" : "white",
      };
    },
  });
});

module.exports = buttonPlugin;
