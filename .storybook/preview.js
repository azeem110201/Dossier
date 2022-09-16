import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import theme from "../src/themes/index";
import "./storybook.css";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <MUIThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
    </MUIThemeProvider>
  ),
];