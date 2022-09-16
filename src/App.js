import TopBar from "./topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./settings/Settings";
import Login from "./login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/register/Register";
function App() {
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

        <Route path="/write">
          <Write></Write>
        </Route>

        <Route path="/settings">
          <Settings></Settings>
        </Route>

        <Route path="/post/:postId">
          <Single></Single>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/register">
          <Register></Register>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
