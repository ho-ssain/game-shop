import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./GameSwiper.css";

import PropTypes from "prop-types";
import { useState } from "react";
import GameSlide from "../../atoms/GameSlide";

function GameSwiper({ games }) {
  const [active, setActive] = useState(false);
  const toggleVideo = () => {
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
      {games.map((game) => (
        <SwiperSlide key={game._id}>
          <GameSlide game={game} active={active} toggleVideo={toggleVideo} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

GameSwiper.propTypes = {
  games: PropTypes.array.isRequired,
};

export default GameSwiper;
