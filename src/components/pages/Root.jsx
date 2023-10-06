import Header from "../organisms/Header/Header";
import SideMenu from "../organisms/SideMenu/SideMenu";
import Bag from "./Bag/Bag";
import Categories from "./Categories/Categories";
import Home from "./Home/Home";
import Library from "./Library/Library";
import "./Root.css";
import { useState, useEffect, useRef } from "react";

function Root() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const homeRef = useRef();
  const catgRef = useRef();
  const libRef = useRef();
  const bagRef = useRef();

  const handleToggleActive = () => {
    setActive(!active);
  };

  const fetchData = () => {
    fetch("http://localhost:5173/api/data.json")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <SideMenu active={active} />
      <div className={`banner ${active ? "active" : undefined}`}>
        <Header toggleActive={handleToggleActive} />
        <div className="container-fluid">
          <Home games={games} reference={homeRef} />
          <Categories reference={catgRef} />
          <Library reference={libRef} />
          <Bag reference={bagRef} />
        </div>
      </div>
    </main>
  );
}

export default Root;
