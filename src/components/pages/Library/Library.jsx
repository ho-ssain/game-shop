/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Library.css";

function Library({ games, reference }) {
  return (
    <section id="lib" className="lib" ref={reference}>
      <h1> Library </h1>
    </section>
  );
}

export default Library;
