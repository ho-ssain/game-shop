/* eslint-disable no-unused-vars */
import "./SideMenu.css";
import { useState } from "react";

import NavList from "../../atoms/NavList";
import navListData from "../../../data/NavListData";

import SocialList from "../../atoms/SocialList";
import socialListData from "../../../data/SocialListData";

import PropTypes from "prop-types";

function SideMenu({ active }) {
  const [navData, setNavData] = useState(navListData);
  const [socialData, setSocialData] = useState(socialListData);

  const handleNavOnClick = (id) => {
    const newNavData = navData.map((nav) => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setNavData(newNavData);
  };

  return (
    <div className={`sideMenu ${active ? "active" : undefined}`}>
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        {navData.map((item) => (
          <NavList key={item._id} item={item} navOnClick={handleNavOnClick} />
        ))}
      </ul>
      <ul className="social">
        {socialData.map((item) => (
          <SocialList key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}

SideMenu.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default SideMenu;
