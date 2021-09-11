import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cities from "./components/Cities/Cities";
import Countries from "./components/Countries/Countries";
import NotFound from "./components/NotFound/NotFound";
import Regions from "./components/Regions/Regions";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Countries/>
        </Route>
        <Route path="/countries">
            <Countries/>
        </Route>
        <Route path="/regions/:id">
            <Regions/>
        </Route>
        <Route path="/cities/:id">
            <Cities/>
        </Route>
        <Route path="*">
            <NotFound/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
