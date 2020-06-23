import React from "react";
import "./App.css";

import homepage from "./pages/homepage/homepage.pages";

import Nav from "./components/Nav/nav.component";
import Footer from "./components/Footer/footer.component";

import { Link, Route, Switch, Router } from "react-router-dom";

function Bags() {
  return (
    <div>
      <h1>Bags</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={homepage} />
      <Route path="/bags" component={Bags} />
      <Footer />
    </div>
  );
}

export default App;
