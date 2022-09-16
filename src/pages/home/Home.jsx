import "./home.css";
import Header from "../../header/Header.jsx";
import Sidebar from "../../sidebar/Sidebar";
import Posts from "../../posts/Posts";

export default function Home() {
  return (
    <>
      {" "}
      <Header />
      <div className="home">
        <Posts></Posts>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}
