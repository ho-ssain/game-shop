/* eslint-disable no-unused-vars */
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

  const sections = [
    {
      name: "home",
      ref: homeRef,
      active: true,
    },
    {
      name: "categories",
      ref: catgRef,
      active: true,
    },
    {
      name: "library",
      ref: libRef,
      active: true,
    },
    {
      name: "bag",
      ref: bagRef,
      active: true,
    },
  ];

  const handleToggleActive = () => {
    setActive(!active);
  };

  const handleSectionActive = (target) => {
    sections.map((sec) => {
      sec.ref.current.classList.remove("active");
      if (sec.ref.current.id === target) {
        sec.ref.current.classList.add("active");
      }
      return sec;
    });
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
      <SideMenu active={active} sectionActive={handleSectionActive} />
      <div className={`banner ${active ? "active" : undefined}`}>
        <Header toggleActive={handleToggleActive} />
        <div className="container-fluid">
          <Home games={games} reference={homeRef} />
          <Categories games={games} reference={catgRef} />
          <Library games={games} reference={libRef} />
          <Bag games={games} reference={bagRef} />
        </div>
      </div>
    </main>
  );
}

export default Root;
