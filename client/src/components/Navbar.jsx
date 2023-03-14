import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { changeTheme } from "../app/themeSlice";
import { changeLanguage } from "../app/languageSlice";
import i18n from "../i18n";

const Navbar = () => {
  const themeValue = useSelector((state) => state.theme.theme);
  const currentLanguage = useSelector((state) => state.language.language);

  const [localThemeValue, setLocalThemeValue] = useState(themeValue);
  const [lng, setLng] = useState(currentLanguage);
  const htmlDoc = document.documentElement;

  const dispatch = useDispatch();

  const handleThemeChange = (event) => {
    event.preventDefault();
    setLocalThemeValue(localThemeValue === "light" ? "dark" : "light");
    dispatch(changeTheme(localThemeValue === "light" ? "dark" : "light"));
  };

  const handleLanguageChange = (event) => {
    event.preventDefault();
    setLng(lng === "en" ? "es" : lng === "es" ? "ar" : "en");
    dispatch(changeLanguage(lng === "en" ? "es" : lng === "es" ? "ar" : "en"));
    i18n.changeLanguage(lng === "en" ? "es" : lng === "es" ? "ar" : "en");
  };

  useEffect(() => {
    localThemeValue === "light" ? htmlDoc.classList.remove("dark") : htmlDoc.classList.add("dark");
  }, [localThemeValue]);

  return (
    <>
      <div className="flex dark:bg-gray-900">
        <button className="text-2xl pb-8 font-bold dark:text-gray-400" onClick={(event) => handleThemeChange(event)}>
          {localThemeValue === "light" ? "LIGTH THEME" : "DARK THEME"}
        </button>
        <button className="flex flex-row pb-8 font-bold dark:text-gray-400" onClick={(event) => handleLanguageChange(event)}>
          {lng === "en" ? "LNG EN" : lng === "es" ? "LNG ES" : "LNG AR"}
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
