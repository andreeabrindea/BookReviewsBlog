import "./header.css";
import logo from "./bookandcup.jpg";
console.log(logo);
export default function Header() {
  return (
    <div className="Header">
      <div className="headerTitles">
        <span className="welcomeText">Bine ai venit!</span>
        <span className="titleText">The Books' Heit</span>
      </div>
      <img className="headerImg" src={logo} alt="books"></img>
    </div>
  );
}
