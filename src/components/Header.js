import React from "react";
//images
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Gi3DGlasses } from "react-icons/gi";

const Header = ({ setDarkMode }) => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="">
            <Gi3DGlasses className="cursor-pointer text-4xl text-black dark:text-offWhite" />
          </a>
          {/* button */}
          <BsFillMoonStarsFill
            className="cursor-pointer text-2xl text-black dark:text-offWhite"
            onClick={() => setDarkMode((prev) => !prev)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
