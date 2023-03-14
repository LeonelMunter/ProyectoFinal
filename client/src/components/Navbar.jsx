import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, Link } from "react-router-dom";

import i18n from "../i18n";
import { changeTheme } from "../app/themeSlice";
import { changeLanguage } from "../app/languageSlice";

import Button from "./Button";

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
      <div className="flex flex-row items-center justify-between bg-slate-400 dark:bg-gray-800 p-5">
        <div className="pl-5">
          <Link className="text-2xl font-bold dark:text-gray-300" to="/">
            Home
          </Link>
        </div>
        <div className="flex flex-row">
          <p className="text-xl px-2 font-bold dark:text-gray-300 uppercase">Projects</p>
          <p className="text-xl px-2 font-bold dark:text-gray-300 uppercase">Projects</p>
          <p className="text-xl px-2 font-bold dark:text-gray-300 uppercase">Projects</p>
        </div>
        <div className="flex flex-row pr-5">
          <Button handle_click={(event) => handleThemeChange(event)} name={localThemeValue === "light" ? "moon" : "sun"} />
          <Button handle_click={(event) => handleLanguageChange(event)} name={lng === "en" ? "en" : lng === "es" ? "es" : "ar"} lng={lng} />
          <button className="flex flex-row text-2xl px-2 font-bold dark:text-gray-300 uppercase">User</button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
