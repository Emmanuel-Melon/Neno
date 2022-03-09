import { extendTheme } from "@chakra-ui/react";
import { Dict } from "@chakra-ui/utils";
import { createContext, useContext, FC, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { frodleTheme } from "../theme";
import merge from "lodash/merge";
import get from "lodash/get";

export enum ColorThemes {
  LIGHT = "light",
  DARK = "dark",
}

type ColorThemeContext = {
  colorTheme: ColorThemes;
  setColorTheme: (theme: ColorThemes) => void;
  themeObject: Dict<any>;
};

const ColorThemeContext = createContext<ColorThemeContext>({
  colorTheme: ColorThemes.LIGHT,
  setColorTheme: () => {},
  themeObject: {},
});

const getTheme = (mode: ColorThemes) =>
  merge({}, frodleTheme, {
    colors: get(frodleTheme.colors.modes, mode, frodleTheme.colors),
  });

const ColorThemeProvider: FC = ({ children }) => {
  const [storedValue, setValue] = useLocalStorage("theme", ColorThemes.LIGHT);
  const [themeMode, setThemeMode] = useState<ColorThemes>(storedValue);
  const themeObject = getTheme(themeMode);
  const config = {
    initialColorMode: themeMode,
    useSystemColorMode: true,
  };
  const extendedTheme = extendTheme(themeObject, config);

  const setColorTheme = (theme: ColorThemes) => {
    setValue(theme);
    setThemeMode(theme);
  };

  return (
    <ColorThemeContext.Provider
      value={{
        colorTheme: themeMode,
        setColorTheme,
        themeObject: extendedTheme,
      }}
    >
      {children}
    </ColorThemeContext.Provider>
  );
};

const useColorTheme = () => {
  const themeContext = useContext(ColorThemeContext);

  if (!themeContext) {
    throw Error("You tried using the theme provider outside of its context");
  }

  return themeContext;
};

export { ColorThemeProvider, useColorTheme };
