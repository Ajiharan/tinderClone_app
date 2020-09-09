import React from "react";
import Header from "./header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./cards/TinderCards";
function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={TinderCards} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
