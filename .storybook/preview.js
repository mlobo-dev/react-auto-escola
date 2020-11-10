import { addDecorator } from "@storybook/react";
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
