/* eslint-disable no-unused-vars */
import "./SideMenu.css";
import { useState } from "react";

import NavList from "./NavList";
import navListData from "../data/NavListData";

import SocialList from "./SocialList";
import socialListData from "../data/SocialListData";

function SideMenu() {
  const [navData, setNavData] = useState(navListData);
  const [socialData, setSocialData] = useState(socialListData);

  return (
    <div className="sideMenu">
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        {navData.map((item) => (
          <NavList key={item._id} item={item} />
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

export default SideMenu;
