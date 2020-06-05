import React, { useContext, useState } from "react";
const themes = {
  light: {
    foreground: "orange",
    background: "lightblue"
  },
  dark: {
    foreground: "lightgray",
    background: "gray"
  }
};
const ThemeContext = React.createContext({
  theme: themes.light,
  toggle: () => {}
});
export default () => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle: () => {
          setTheme(theme => {
            setTheme(theme === themes.light ? themes.dark : themes.light);
          });
        }
      }}
    >
      <Toolbar />
    </ThemeContext.Provider>
  );
};
const Toolbar = () => {
  return <ThemeButton />;
};
const ThemeButton = () => {
  const context = useContext(ThemeContext);
  return (
    <button
      style={{
        fontSize: "32px",
        color: context.theme.foreground,
        backgroundColor: context.theme.background
      }}
      onClick={() => {
        context.toggle();
      }}
    >
      Click me!
    </button>
  );
};
