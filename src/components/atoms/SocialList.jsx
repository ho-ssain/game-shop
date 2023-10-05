import PropTypes from "prop-types";

function SocialList({ item }) {
  return (
    <li>
      <a href="#" className={item.class}>
        <i className={`bi ${item.icon}`}></i>
      </a>
    </li>
  );
}

SocialList.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
  }).isRequired,
};

export default SocialList;
