import PropTypes from "prop-types";

function NavList({ item }) {
  return (
    <li>
      <a href="#">
        <i className={`bi ${item.icon}`}></i>
        <span className="navName">{item.name}</span>
      </a>
    </li>
  );
}

NavList.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default NavList;
