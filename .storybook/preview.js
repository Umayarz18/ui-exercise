import "../public/stylesheets.css";

const customViewports = {
  small: {
    name: "Small Device",
    styles: {
      width: "320px",
      height: "599px",
    },
  },
  medium: {
    name: "Medium Device",
    styles: {
      width: "600px",
      height: "1279px",
    },
  },
  large: {
    name: "Large Device",
    styles: {
      width: "1280px",
      height: "1920px",
    },
  }
}

export const parameters = {
  viewport: {
    viewports: {
      ...customViewports
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}