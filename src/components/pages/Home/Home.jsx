import GameSwiper from "../../molecules/Swiper/GameSwiper";

import "./Home.css";

import PropTypes from "prop-types";

function Home({ games }) {
  return (
    <section id="home" className="home active">
      <div className="container-fluid">
        <div className="row">
          <GameSwiper games={games} />
        </div>
      </div>
    </section>
  );
}

Home.propTypes = {
  games: PropTypes.array.isRequired,
};

export default Home;
