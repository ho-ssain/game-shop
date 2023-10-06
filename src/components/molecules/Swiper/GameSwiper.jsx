import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import "./GameSwiper.css";

import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import PropTypes from "prop-types";
import { useState } from "react";

function GameSwiper({ games }) {
  const [active, setActive] = useState(false);

  const handlePlayBtn = () => {
    setActive(!active);
  };

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      navigation={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className="gameSwiper"
    >
      {games.map((g) => (
        <SwiperSlide key={g._id}>
          <div className="gameSlider">
            <img src={g.img} alt="Game Image" />
            <div className="content">
              <h2>{g.title}</h2>
              <p>{g.description}</p>
              <div className="buttons">
                <a href="#" className="orderBtn">
                  Order Now
                </a>
                <a
                  href="#"
                  className={`playBtn ${active ? "active" : undefined}`}
                  onClick={handlePlayBtn}
                >
                  <span className="pause">
                    <i className="bi bi-pause-fill"></i>
                  </span>
                  <span className="play">
                    <i className="bi bi-play-fill"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

GameSwiper.propTypes = {
  games: PropTypes.array.isRequired,
};

export default GameSwiper;
