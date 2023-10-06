import PropTypes from "prop-types";
import "./GameCard.css";
import GameRating from "../../atoms/GameRating/GameRating";

function GameCard({ game }) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gameCard">
        <img src={game.img} alt={game.title} className="img-fluid" />
        <a href="#" className="like">
          <i className="bi bi-heart-fill"></i>
        </a>
        <div className="gameFeature">
          <span className="gameType">{game.level}</span>
          <GameRating rating={game.rating} />
        </div>
        <div className="gameTitle mt-4 mb-3">{game.title}</div>
        <div className="gamePrice">
          {game.discount !== 0 && (
            <>
              <span className="discount">
                <i>{game.discount * 100}%</i>
              </span>
              <span className="prevPrice">${game.price.toFixed(2)}</span>
            </>
          )}
          <span className="currentPrice">
            ${((1 - game.discount) * game.price).toFixed(2)}
          </span>
        </div>
        <a href="#" className="addBag">
          <i className="bi bi-bag-plus-fill"></i>
        </a>
      </div>
    </div>
  );
}

GameCard.propTypes = {
  game: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default GameCard;
