import TopBar from "./topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./settings/Settings";
import Login from "./login/Login";
import Posts from "./posts/Posts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/register/Register";
function App() {
  const user = true;
  return (
    <Router>
      <TopBar></TopBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/single">
          <Single></Single>
        </Route>

        <Route path="/posts">
          <Posts></Posts>
        </Route>

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
      </Switch>
    </Router>
  );
}

export default App;
