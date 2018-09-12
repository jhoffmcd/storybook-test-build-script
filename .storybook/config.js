import { configure } from "@storybook/react";

// Only polyfill require.context in test mode
if (process.env.NODE_ENV === "test") {
  require("babel-plugin-require-context-hook/register")();
}

// Dynamically load all files within src folder `{componentName}.stories.js` pattern
const requireComponents = require.context("../src", true, /stories\.js$/);

function loadStories() {
  requireComponents.keys().forEach(requireComponents);
}

configure(loadStories, module);
