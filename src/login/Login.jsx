import './login.css'

export default function Login() {
  return (
    <div className="login">
        <form className="loginForm">
            <label>Email</label>
            <input type="text" placeholder='Please enter your e-mail'/>
            <label>Password</label>
            <input type="password" placeholder='Please enter your password'/>
            <button className="loginButton">Login</button>
        </form>
    </div>
  )
}
