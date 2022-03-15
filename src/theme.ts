import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

// pink: #F875AA

// brown: #D9534F

// dark brown: #533535

const nenoTheme = extendTheme({
  colors: {
    brand: {
      primary: "#D9534F",
      white: "#fff",
      secondary: "#333",
      accent: "#BB6464",
      highlight: "rgba(208, 98, 36, 0.1)",
      highlight1: "rgba(208, 98, 36, 0.2)",
      grey: "#f0f0f0",
      danger: "#df4759",
    },
  },
  fonts: {
    heading: `Pangolin, ${chakraTheme?.fonts?.heading}`,
    body: `Montserrat, ${chakraTheme?.fonts?.body}`,
  },
  borders: {
    border: {
      primary: "3px solid #333",
      accent: "3px solid #D9534F",
      secondary: "1px solid #333",
      top: "solid 50px #333",
      radius: {
        primary: "2% 6% 5% 4% / 1% 1% 2% 4%",
        secondary: "2% 6% 5% 4% / 1% 1% 2% 4%",
      },
    },
  },
});

export default nenoTheme;
