import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import "./Home.css";

function Home() {
  return (
    <main>
      <SideMenu />
      <div className="banner">
        <Header />
      </div>
    </main>
  );
}

export default Home;
