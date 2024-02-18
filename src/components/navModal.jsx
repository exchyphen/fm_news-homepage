import { useState } from "react";

import "./navModal.css";

import IconMenuOpen from "../assets/images/icon-menu.svg";
import IconMenuClose from "../assets/images/icon-menu-close.svg";

const NavModal = (props) => {
  const [menuState, setMenuState] = useState(true);

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <>
      <button className="menu-button">
        <img
          className="menu"
          src={IconMenuOpen}
          alt="open menu icon"
          onClick={toggleMenu}
        ></img>
      </button>
      {menuState ? null : (
        <div className="nav-modal-container">
          <div className="close-button-wrapper">
            <img
              className="menu"
              src={IconMenuClose}
              alt="close menu icon"
              onClick={toggleMenu}
            ></img>
          </div>
          <nav className="nav-container nav-modal">
            <a className="nav-title" href="#" onClick={toggleMenu}>
              Home
            </a>
            <a className="nav-title" href="#new" onClick={toggleMenu}>
              New
            </a>
            <a className="nav-title" href="#popular" onClick={toggleMenu}>
              Popular
            </a>
            <a className="nav-title" href="#trending" onClick={toggleMenu}>
              Trending
            </a>
            <a className="nav-title" href="#" onClick={toggleMenu}>
              Categories
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavModal;
