import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Detail from "./components/Detail";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
