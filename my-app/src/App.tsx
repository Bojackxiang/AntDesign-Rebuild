import React from "react";
import { useImageHook } from "./useUrlLoader";
import Button from "./Button";


// !!be careful: the [key: string] means the computed key,
interface IThemeProps {
  [key: string]: { color: string; background: string };
}

const theme: IThemeProps = {
  light: {
    color: "red",
    background: "lightblue",
  },
  dark: {
    color: "blue",
    background: "green",
  },
};

export const ThemeContext = React.createContext(theme.light);

function App() {
  return (
    <ThemeContext.Provider value={theme.dark}>
      <Button/>
    </ThemeContext.Provider>
  );
}

export default App;
