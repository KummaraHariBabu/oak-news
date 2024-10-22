import React, { useContext } from "react";
import "./Theme.scss";
import sun from "../../assets/sun.avif";
import moon from "../../assets/moon.avif";
import { ThemeContext } from "../../context/ThemeContext";
const Theme = () => {
  const theme = useContext(ThemeContext);
  const changeTheme = () => {
    const toggle = "TOGGLE";
    theme.dispath({ type: toggle });
  };
  return (
    <div className="toggle">
      <img src={sun} alt="sun" className="icon" />
      <img src={moon} alt="moon" className="icon" />
      <div
        className="button"
        onClick={changeTheme}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Theme;
