import { addDecorator, addParameters } from "@storybook/react";
import GlobalStyle from "../src/components/Global/GlobalStyle";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator((storyfn) => (
  <>
    <GlobalStyle />
    {storyfn()}
  </>
));

const viewports = {
  extraSmall: {
    name: "Portrait phone (default)",
    styles: {
      width: "360px",
      height: "640px",
    },
  },

  small: {
    name: "Landscap phone (sm)",
    styles: {
      width: "640px",
      height: "360px",
    },
  },

  medium: {
    name: "Tablet phone (md)",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },

  large: {
    name: "Desktop phone (lg)",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },

  extraLarge: {
    name: "Large Desktop phone (xl)",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
};

addParameters({
  viewport: {
    viewports,
  },
});
