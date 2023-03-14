import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, Link } from "react-router-dom";

import i18n from "../i18n";
import { changeTheme } from "../app/themeSlice";
import { changeLanguage } from "../app/languageSlice";

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
      <div className="flex flex-row items-center justify-between dark:bg-gray-900">
        <div>
          <Link className="text-2xl pb-5 font-bold dark:text-gray-400" to="/">
            Home
          </Link>
        </div>
        <div className="flex flex-row">
          <p className="text-xl pb-5 px-2 font-bold dark:text-gray-400">Projects</p>
          <p className="text-xl pb-5 px-2 font-bold dark:text-gray-400">Projects</p>
          <p className="text-xl pb-5 px-2 font-bold dark:text-gray-400">Projects</p>
        </div>
        <div className="flex flex-row">
          <button className="text-2xl pb-5 px-5 font-bold dark:text-gray-400" onClick={(event) => handleThemeChange(event)}>
            {localThemeValue === "light" ? "Moon" : "Sun"}
          </button>
          <button className="flex flex-row text-2xl pb-5 px-5 font-bold dark:text-gray-400" onClick={(event) => handleLanguageChange(event)}>
            {lng === "en" ? "EN" : lng === "es" ? "ES" : "AR"}
          </button>
          <button className="flex flex-row text-2xl pb-5 px-2 font-bold dark:text-gray-400">User</button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
