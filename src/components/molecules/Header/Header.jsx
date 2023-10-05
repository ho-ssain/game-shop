import "./Header.css";
import userImg from "../../../assets/pp/sk4.png";

import PropTypes from "prop-types";

function Header({ toggleActive }) {
  return (
    <header>
      <a href="#" className="menu" onClick={toggleActive}>
        <i className="bi bi-sliders"></i>
      </a>

      <div className="userItems">
        <a href="#" className="icon">
          <i className="bi bi-heart-fill"></i>
          <span className="like">0</span>
        </a>
        <a href="#" className="icon">
          <i className="bi bi-bag-fill"></i>
          <span className="bag">0</span>
        </a>
        <div className="avatar">
          <a href="#">
            <img src={userImg} alt="User-Image" />
          </a>
          <div className="user">
            <span>User Name</span>
            <a href="#">View Profile</a>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  toggleActive: PropTypes.func.isRequired,
};

export default Header;
