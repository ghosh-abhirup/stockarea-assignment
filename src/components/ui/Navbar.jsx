import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <div className="navbar">
      <p
        className="text-base sm:text-lg themeText font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Warehouse Manager
      </p>
      <div className="flex items-center gap-2 sm:gap-4">
        <p className="font-semibold text-xs sm:text-base themeText">
          {isDarkTheme ? "Light mode" : "Dark mode"}
        </p>

        <Switch
          checked={isDarkTheme}
          onChange={setIsDarkTheme}
          onClick={toggleTheme}
          className={`bg-gray-300
           relative inline-flex h-5 w-10 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              isDarkTheme ? "translate-x-6" : "translate-x-1"
            } inline-block h-3 w-3 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Navbar;
