/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./Bag.css";

function Bag({ games, reference }) {
  return (
    <section id="bag" className="bag" ref={reference}>
      <h1> Bag </h1>
    </section>
  );
}

export default Bag;
