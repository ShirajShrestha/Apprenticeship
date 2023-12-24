import "./themeChange.css";
import useLocalStorage from "./useLocalStorage";

const ThemeChange = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="theme-change-wrapper" data-theme={theme}>
      <div className="theme-change-wrapper-second">
        <h1>Theme Changer</h1>
        <p>Hello Everyone</p>
        <button onClick={() => handleToggle()}>Change Theme</button>
      </div>
    </div>
  );
};

export default ThemeChange;
