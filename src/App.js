import React from "react";
import "./App.css";
import homepage from "./pages/homepage/homepage.pages";
import MensPage from "./pages/mens/mens.pages";
import Homepage from "./pages/shopPage/shopPage.pages";

import Nav from "./components/Header/header.component";
import Footer from "./components/Footer/footer.component";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={homepage} />
        <Route exact path="/mens" component={MensPage} />
        <Route exact path="/shop" component={Homepage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
