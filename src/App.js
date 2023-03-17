import TopBar from "./topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./settings/Settings";
import Login from "./login/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./pages/register/Register";
function App() {
  const user = true;
  return (
    <Router>
      <TopBar></TopBar>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/single" element={<Single />} / >

        <Route path="/write">
          {user ? <Write></Write> : <Register></Register>}
        </Route>

        <Route path="/settings">
          {user ? <Settings></Settings> : <Register></Register>}
        </Route>

        <Route path="/post/:postId">
          <Single></Single>
        </Route>

        <Route path="/login">{user ? <Home></Home> : <Login></Login>}</Route>

        <Route path="/register">
          {user ? <Home></Home> : <Register></Register>}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
