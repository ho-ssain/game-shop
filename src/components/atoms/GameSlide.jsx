function GameSlide({ game, active, toggleVideo }) {
  return (
    <div className="gameSlider">
      <img src={game.img} alt="game-img" />
      <div className={`video ${active ? "active" : undefined}`}>
        <iframe
          src={game.trailer}
          title={game.title}
          width="1280"
          height="720"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
      <div className="content">
        <h2>{game.title}</h2>
        <p>{game.description}</p>
        <div className="buttons">
          <button className="btn orderBtn">Order Now</button>
          <button
            className={`btn playBtn ${active ? "active" : undefined}`}
            onClick={toggleVideo}
          >
            <span className="pause">
              <i className="bi bi-pause-fill"></i>
            </span>
            <span className="play">
              <i className="bi bi-play-fill"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

import PropTypes from "prop-types";
GameSlide.propTypes = {
  game: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  toggleVideo: PropTypes.func.isRequired,
};

export default GameSlide;
