import React from "react";
import "./App.css";

import homepage from "./pages/homepage/homepage.pages";
import MensPage from "./pages/mens/mens.pages";

import Nav from "./components/Nav/nav.component";
import Footer from "./components/Footer/footer.component";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={homepage} />
        <Route exact path="/mens" component={MensPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
