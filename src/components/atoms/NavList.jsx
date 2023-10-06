import PropTypes from "prop-types";

function NavList({ item, navOnClick }) {
  return (
    <li>
      <a
        href="#"
        className={`${item.active ? "active" : undefined}`}
        onClick={() => navOnClick(item._id, item.target)}
      >
        <i className={`bi ${item.icon}`}></i>
        <span className="navName">{item.name}</span>
      </a>
    </li>
  );
}

NavList.propTypes = {
  item: PropTypes.object.isRequired,
  navOnClick: PropTypes.func.isRequired,
};

export default NavList;
