import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { changeTheme } from "../app/themeSlice";

const Navbar = () => {
  const themeValue = useSelector((state) => state.theme.theme);

  const [localThemeValue, setLocalThemeValue] = useState(themeValue);
  const htmlDoc = document.documentElement;

  const dispatch = useDispatch();

  const handleThemeChange = (event) => {
    event.preventDefault();
    setLocalThemeValue(localThemeValue === "light" ? "dark" : "light");
    dispatch(changeTheme(localThemeValue === "light" ? "dark" : "light"));
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
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
