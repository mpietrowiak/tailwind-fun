const plugin = require("tailwindcss/plugin");

const openVariant = plugin(function ({ addVariant, e }) {
  addVariant("group-open", ":merge(.group).open &");
});

module.exports = openVariant;
