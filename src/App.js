import React from "react";
import Header from "./header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./cards/TinderCards";
import Chats from "./chats/Chats";
import ChatScreen from "./chats/ChatScreen";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <TinderCards />
          </Route>
          <Route exact path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route exact path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
