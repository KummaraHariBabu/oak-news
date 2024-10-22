import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INITIAL_THEME = { darkMode: true };
const themeReducer = (action, state) => {
  const toggle = "TOGGLE";
  switch (action.type) {
    case toggle:
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};
export const ThemeProvider = ({ children }) => {
  const [state, dispath] = useReducer(themeReducer, INITIAL_THEME);

  return (
    <ThemeContext.Provider value={{ state, dispath }}>
      {children}
    </ThemeContext.Provider>
  );
};
