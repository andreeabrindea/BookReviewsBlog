import TopBar from "./topbar/TopBar";
import Home from "./pages/home/Home";
import Sidebar from "./sidebar/Sidebar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./settings/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
   <TopBar></TopBar>
   <Switch>
      <Route exact path ="/">
        <Home></Home>
      </Route>

      <Route path ="/single">
        <Single></Single>
      </Route>

      <Route path ="/write">
        <Write></Write>
      </Route>

      <Route path ="/settings">
        <Settings></Settings>
      </Route>

      <Route path ="/post/:postId">
        <Single></Single>
      </Route>
   </Switch>
   {/* <Single/> */}
   {/* <Home></Home> */}
   {/* <Write></Write> */}

   </Router>
  );
}

export default App;
