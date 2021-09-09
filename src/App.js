import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
            <Countries/>
        </Route>
        <Route path="/countries">
            <Countries/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
