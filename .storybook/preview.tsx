import React from "react";
import "../src/index.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  globalTypes: {
    theme: {
      name: "Theme", // Label in the toolbar
      description: "Global theme for components",
      defaultValue: "solar-pancake", // Default theme
      toolbar: {
        icon: "circlehollow", // Icon in the toolbar
        items: [
          { value: "solar-pancake", title: "Solar Pancake" },
          { value: "moonlit-blueberry", title: "Moonlit Blueberry" },
          { value: "mystic-mint", title: "Mystic Mint" },
        ],
        showName: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const { theme } = context.globals;
      document.documentElement.setAttribute("data-theme", theme);
      return <Story />;
    },
  ],
};

export default preview;
