import React, { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
const logo = `${process.env.PUBLIC_URL}/favic.png`;

const Navbar = ({ category, onCategoryChange, search, onSearchChange }) => {
  const [open, setOpen] = useState(false);

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

  const chooseCategory = (next) => {
    onCategoryChange(next);
    setOpen(false);
    document.querySelector("#library")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Dev Stacks home">
        <span className="brand-mark"><img src={logo} alt="" /></span>
        <span>DEV<span>STACKS</span></span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="#library">Library</a><a href="#about">About</a></nav>
      <label className="nav-search"><FiSearch aria-hidden="true" /><input value={search} onChange={(e) => onSearchChange(e.target.value)} placeholder="Search resources" aria-label="Search resources" /></label>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <FiX /> : <FiMenu />}</button>
      {open && <div className="mobile-menu"><label className="mobile-search"><FiSearch /><input value={search} onChange={(e) => onSearchChange(e.target.value)} placeholder="Search resources" /></label><a href="#library" onClick={() => setOpen(false)}>Resource library</a><a href="#about" onClick={() => setOpen(false)}>About DevStacks</a><p>Browse by collection</p><div className="mobile-categories">{categories.map((item) => <button className={category === item ? "active" : ""} onClick={() => chooseCategory(item)} key={item}>{item}</button>)}</div></div>}
    </header>
  );
};

export default Navbar;
