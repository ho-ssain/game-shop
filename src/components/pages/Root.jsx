import Header from "../molecules/Header/Header";
import SideMenu from "../organisms/SideMenu/SideMenu";
import Home from "./Home/Home";
import "./Root.css";
import { useState, useEffect } from "react";

function Root() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

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
          <Home games={games} />
        </div>
      </div>
    </main>
  );
}

export default Root;
