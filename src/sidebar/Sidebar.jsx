import "./sidebar.css";
import photo from "./me.jpg";
console.log(photo);
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="meImg" src={photo} alt="me"></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          commodi adipisci aspernatur fugiat iusto cumque porro consectetur.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Reviews</li>
          <li className="sidebarListItem">Random</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME: </span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-solid fa-envelope-open"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-discord"></i>
        </div>
      </div>
    </div>
  );
}
