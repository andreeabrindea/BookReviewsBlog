import { Link } from "react-router-dom";
import "./topbar.css";
export default function TopBar() {
  return (
    <div className="TOP">
      <div className="topLeft">
        <i className="TopIcon fa-solid fa-envelope-open"></i>
        <i className="TopIcon fa-brands fa-instagram"></i>
        <a href="https://discord.gg/yASd8GGc"  style={{ textDecoration: "none", color: "inherit" }}><i className="TopIcon fa-brands fa-discord"></i></a>
      </div>
      <div className="topCenter">
        <ul className="TopList">
          <li className="TopListItem">
            <Link
              className="link"
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link>
          </li>
          <li className="TopListItem">
            <Link className="link" to="/posts" style={{ textDecoration: "none", color: "inherit" }}>Posts</Link></li>
          <li className="TopListItem">About</li>
        </ul>
      </div>
      <div className="topRight">
        <ul className="SearchIcon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </ul>
        <ul className="UserIcon">
          <i class="fa-solid fa-circle-user"></i>
        </ul>
      </div>
    </div>
  );
}
