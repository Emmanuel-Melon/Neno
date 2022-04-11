import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

// pink: #F875AA

// brown: #D9534F

// dark brown: #533535

// box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

const nenoTheme = extendTheme({
  colors: {
    brand: {
      primary: "#D9534F",
      white: "#fff",
      secondary: "#333",
      accent: "#723d46",
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
      accent: "3px solid #723d46",
      secondary: "1px solid #333",
      grey: "3px solid #F1EDE9",
      white: "3px solid #fff",
      top: "solid 50px #333",
      radius: {
        primary: "2% 6% 5% 4% / 1% 1% 2% 4%",
        secondary: "2% 6% 5% 4% / 1% 1% 2% 4%",
      },
    },
  },
});

export default nenoTheme;
