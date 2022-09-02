import './settings.css'
import Sidebar from "../sidebar/Sidebar";
import photo from "./user17.png";
console.log(photo)

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
      {/* <div className="settingsComponents">
        <span className="settingsUpdateAccount"> Update </span>
        <span className="settingsDeleteAccount"> Delete Your Account </span>
      </div> */}
      <form className="settingsForm">
        <p>Update Or Delete Your Account</p>
        <div className="settingsProfilePhoto">
        <img className="userPhoto" src ={photo} alt="user"> 
              </img>
        </div>
        <label>Username:</label>
        <input type="text" placeholder='Username'/>
        <label>Email:</label>
        <input type="email" placeholder='Email'/>
        <label>Password:</label>
        <input type="password" placeholder='password'/>
        <button className="SubmitSettings">Update</button>
        <button className="DeleteAccount">Delete</button>

      </form>
      </div>
      <Sidebar></Sidebar>

    </div>
  )
}
