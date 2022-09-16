import "./login.css";
import Settings from "../settings/Settings";
import photo from "../settings/user17.png";
import Sidebar from "../sidebar/Sidebar";
console.log(photo);

export default function Login() {
  return (
    <div className="login">
      <div className="LoginWrapper">
        <form className="loginForm">
          <div className="settingsProfilePhoto">
            <img className="userPhoto" src={photo} alt="user"></img>
          </div>
          <label>Email:</label>
          <input type="text" placeholder="Please enter your e-mail" />
          <label>Password:</label>
          <input type="password" placeholder="Please enter your password" />
          <button className="LoginButton">Login</button>
          <button className="RegisterButton">Register</button>
        </form>
      </div>
      <Sidebar></Sidebar>
    </div>
  );
}
