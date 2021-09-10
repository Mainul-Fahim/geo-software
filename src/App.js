import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Countries from "./components/Countries/Countries";
import NotFound from "./components/NotFound/NotFound";

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
        <Route path="*">
            <NotFound/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
