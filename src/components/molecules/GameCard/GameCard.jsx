import PropTypes from "prop-types";
import "./GameCard.css";

function GameCard({ game }) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <img src={game.img} alt={game.title} className="img-fluid" />
      <a href="#">
        <i className="bi bi-heart-fill"></i>
      </a>
      <div className="gameFeature">
        <span className="gameType">{game.level}</span>
      </div>
    </div>
  );
}

export default GameCard;
