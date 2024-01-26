import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";

const Navbar = ({ setCategory }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const categories = [
    "All",
    "Front End Tools",
    "CSS Framework",
    "Design Tools",
    "Javascript Libraries",
    "Fonts",
    "Theme | Colors",
    "Icons",
  ];

  const handleCategoryClick = (category) => {
    setCategory(category);
    handleNav();
  };

  return (
    <div className="fixed top-0 z-50 flex items-center justify-between w-full h-24 px-4 mx-auto bg-white md:px-20 bg-opacity-95">
      <a className="flex items-center gap-2" href="#home">
        <img className="h-20 object-contain" src={logo} alt="" />
        <h1 className="w-full hidden md:block text-lg font-medium tracking-widest text-primary">
          {`DEV `}
          <span className="text-black">{`| STACKS`}</span>
        </h1>
      </a>

      <div onClick={handleNav} className="block p-2 md:hidden">
        {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full m-4 text-lg font-medium tracking-widest text-primary">
          {`DEV `}
          <span className="text-black">{`| STACKS`}</span>
        </h1>

        <ul className="p-4">
          {categories.map((category, index) => (
            <a
              key={index}
              onClick={() => handleCategoryClick(category)}
              href={`#${category.toLowerCase().replace(/\s/g, "")}`}
            >
              <li className="p-4 border-b border-gray-600 active:bg-primary">
                {category}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
